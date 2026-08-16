#!/usr/bin/python
# coding:utf-8

# @FileName:    liveMan.py
# @Time:        2024/1/2 21:51
# @Author:      bubu
# @Project:     douyinLiveWebFetcher

from contextlib import contextmanager
from datetime import datetime
from multiprocessing import Condition, Lock
from pathlib import Path
from typing import Dict, List, Tuple
from unittest.mock import patch
from urllib3.util.url import parse_url
import codecs
import execjs
import gzip
import hashlib
import importlib
import json
import logging
import math
import os
import random
import re
import string
import subprocess
import sys
import threading
import time
import traceback
import urllib.parse
import websocket

import requests
from py_mini_racer import MiniRacer

import google.protobuf.json_format as gp_json_format
import google.protobuf.message as gp_message

import protobuf.douyin.bizIm.webcast.data_pb2 as webcast_data
import protobuf.douyin.bizIm.live_pb2 as bizIm_live
import protobuf.douyin.bizIm.webcast.im_pb2 as webcast_im
import protobuf.douyin.transport.webcast.im_pb2 as transport_im

from ac_signature import get__ac_signature
from cascadewriter import CascadeWriter
from renderer import render_text
from compression import compress_file

if sys.version_info >= (3, 14):
    from compression import zstd
else:
    from backports import zstd

logging.basicConfig(
    level=os.environ.get('LOG_LEVEL', 'DEBUG').upper(),
    format=r"%(asctime)s %(filename)s:%(lineno)d [%(levelname)s] %(message)s"
)
logger = logging.getLogger(__name__)


def execute_js(js_file: str):
    """
    执行 JavaScript 文件
    :param js_file: JavaScript 文件路径
    :return: 执行结果
    """
    with open(js_file, 'r', encoding='utf-8') as file:
        js_code = file.read()

    ctx = execjs.compile(js_code)
    return ctx


@contextmanager
def patched_popen_encoding(encoding='utf-8'):
    original_popen_init = subprocess.Popen.__init__

    def new_popen_init(self, *args, **kwargs):
        kwargs['encoding'] = encoding
        original_popen_init(self, *args, **kwargs)

    with patch.object(subprocess.Popen, '__init__', new_popen_init):
        yield


def generateSignature(wss, script_file='sign.js'):
    """
    出现gbk编码问题则修改 python模块subprocess.py的源码中Popen类的__init__函数参数encoding值为 "utf-8"
    """
    params = ("live_id,aid,version_code,webcast_sdk_version,"
              "room_id,sub_room_id,sub_channel_id,did_rule,"
              "user_unique_id,device_platform,device_type,ac,"
              "identity").split(',')
    wss_params = urllib.parse.urlparse(wss).query.split('&')
    wss_maps = {i.split('=')[0]: i.split("=")[-1] for i in wss_params}
    tpl_params = [f"{i}={wss_maps.get(i, '')}" for i in params]
    param = ','.join(tpl_params)
    md5 = hashlib.md5()
    md5.update(param.encode())
    md5_param = md5.hexdigest()

    with codecs.open(script_file, 'r', encoding='utf8') as f:
        script = f.read()

    ctx = MiniRacer()
    ctx.eval(script)

    try:
        signature = ctx.call("get_sign", md5_param)
        return signature
    except Exception as e:
        logger.error(e)

    # 以下代码对应js脚本为sign_v0.js
    # context = execjs.compile(script)
    # with patched_popen_encoding(encoding='utf-8'):
    #     ret = context.call('getSign', {'X-MS-STUB': md5_param})
    # return ret.get('X-Bogus')


def generateMsToken(length=182):
    """
    产生请求头部cookie中的msToken字段，其实为随机的107位字符
    :param length:字符位数
    :return:msToken
    """
    random_str = ''
    base_str = string.ascii_letters + string.digits + '-_'
    _len = len(base_str) - 1
    for _ in range(length):
        random_str += base_str[random.randint(0, _len)]
    return random_str


def format_readable_time(ts: int, mili=False):
    ts = int(ts)
    if mili:
        return datetime.fromtimestamp(ts / 1000).strftime('%Y-%m-%d %H:%M:%S.' + str(ts % 1000))
    else:
        return datetime.fromtimestamp(ts).strftime('%Y-%m-%d %H:%M:%S')


class DouyinLiveWebFetcher:

    def __init__(self, live_id, abogus_file='a_bogus.js'):
        """
        直播间弹幕抓取对象
        :param live_id: 直播间的直播id，打开直播间web首页的链接如：https://live.douyin.com/261378947940，
                        其中的261378947940即是live_id
        """
        self.abogus_file = abogus_file
        self.__ttwid = None
        self.__room_id = None
        self.session = requests.Session()
        self.live_id = live_id
        self.host = "https://www.douyin.com/"
        self.live_url = "https://live.douyin.com/"
        self.user_agent = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0"
        self.headers = {'User-Agent': self.user_agent}

        self.douyin_proto = {
            "bizIm_live": importlib.import_module("protobuf.douyin.bizIm.live_pb2"),
            "webcast_data": importlib.import_module("protobuf.douyin.bizIm.webcast.data_pb2"),
            "webcast_im": importlib.import_module("protobuf.douyin.bizIm.webcast.im_pb2"),
            "transport_im": importlib.import_module("protobuf.douyin.transport.webcast.im_pb2"),
        }

        self.stopped = True
        self.cond_stopped = Condition()

        self.msg_log_file_name = None
        self.json_log_file_name = None

    def _init_log_files(self):
        if self.msg_log_file_name:
            return
        file_name = f"live.{self.live_id}.{time.strftime('%y%m%d_%H%M%S')}"
        self.json_log_file_name = file_name + '.json'
        self.msg_log_file_name = file_name + '.log'
        self.json_log_file = open(self.json_log_file_name, mode='wt', encoding='utf8', buffering=1)
        self.msg_log_file = open(self.msg_log_file_name, mode='wt', encoding='utf8', buffering=1)
        self.cascade_log_file = CascadeWriter(self.msg_log_file, self.json_log_file)

    def log_msg(self, *values: object, sep: str | None = " ", end: str | None = "\n"):
        print(*values, sep=sep, end=end, file=self.msg_log_file)

    def log_json(self, *values: object, sep: str | None = " ", end: str | None = "\n"):
        print(*values, sep=sep, end=end, file=self.json_log_file)

    def cascade_log(self, *values: object, sep: str | None = " ", end: str | None = "\n"):
        print(*values, sep=sep, end=end, file=self.cascade_log_file)

    def start(self, display_text: str, data: str):
        self._init_log_files()
        self.stopped = False
        self.log_json(format_readable_time(int(time.time() * 1000), True))
        self.log_json(data)
        self.log_msg(f'【直播间】{display_text}')
        self._connectWebSocket()

    def stop(self):
        with self.cond_stopped:
            self.stopped = True
            self.cond_stopped.notify()
        self.ws.close()

        def compress_log_files(*files: List[str]):
            for f in files:
                logger.debug(f"正在压缩文件 '{f}'")
                compress_file(f, f + '.zstd', level=11)
                logger.debug(f"文件压缩完成 '{f}.zstd'")

        threading.Thread(target=compress_log_files, args=(self.msg_log_file_name, self.json_log_file_name)).start()
        self.msg_log_file_name, self.json_log_file_name = None, None
        self.json_log_file.close()
        self.msg_log_file.close()
        self.cascade_log_file = None

    def run_forever(self, poll_interval=5):
        while True:
            try:
                status, display_text, data = self.get_room_status()
                if status == 0:
                    self.start(display_text, data)
                elif status == 2:
                    logger.info('未开播或直播已结束')
                else:
                    logger.info('直播间状态未知')
                time.sleep(poll_interval)
            except KeyboardInterrupt:
                return

    @property
    def ttwid(self):
        """
        产生请求头部cookie中的ttwid字段，访问抖音网页版直播间首页可以获取到响应cookie中的ttwid
        :return: ttwid
        """
        if self.__ttwid:
            return self.__ttwid
        try:
            response = self.session.get(self.live_url, headers=self.headers)
            response.raise_for_status()
        except Exception as err:
            logger.error(f"【X】Request the live url error: {err}")
        else:
            self.__ttwid = response.cookies.get('ttwid')
            return self.__ttwid

    @property
    def room_id(self):
        """
        根据直播间的地址获取到真正的直播间roomId，有时会有错误，可以重试请求解决
        :return:room_id
        """
        if self.__room_id:
            return self.__room_id
        url = self.live_url + self.live_id
        headers = {
            "User-Agent": self.user_agent,
            "cookie": f"ttwid={self.ttwid}&msToken={generateMsToken()}; __ac_nonce=0123407cc00a9e438deb4",
        }
        try:
            response = self.session.get(url, headers=headers)
            response.raise_for_status()
        except Exception as err:
            logger.error(f"【X】Request the live room url error: {err}")
        else:
            match = re.search(r'roomId\\":\\"(\d+)\\"', response.text)
            if match is None or len(match.groups()) < 1:
                logger.error("【X】No match found for roomId")

            self.__room_id = match.group(1)

            return self.__room_id

    def get_ac_nonce(self):
        """
        获取 __ac_nonce
        """
        resp_cookies = requests.get(self.host, headers=self.headers).cookies
        return resp_cookies.get("__ac_nonce")

    def get_ac_signature(self, __ac_nonce: str = None) -> str:
        """
        获取 __ac_signature
        """
        __ac_signature = get__ac_signature(
            self.host[8:], __ac_nonce, self.user_agent)
        self.session.cookies.set("__ac_signature", __ac_signature)
        return __ac_signature

    def get_a_bogus(self, url_params: dict):
        """
        获取 a_bogus
        """
        url = urllib.parse.urlencode(url_params)
        ctx = execute_js(self.abogus_file)
        _a_bogus = ctx.call("get_ab", url, self.user_agent)
        return _a_bogus

    def get_room_status(self) -> Tuple[int, str, str]:
        """
        获取直播间开播状态:
        room_status: 2 直播已结束
        room_status: 0 直播进行中
        """
        logger.debug('正在获取直播间开播状态')
        try:
            nonce = self.get_ac_nonce()
            for _ in range(10):
                msToken = generateMsToken()
                signature = self.get_ac_signature(nonce)
                url = (
                    'https://live.douyin.com/webcast/room/web/enter/?aid=6383'
                    '&app_name=douyin_web&live_id=1&device_platform=web&language=zh-CN&enter_from=page_refresh'
                    '&cookie_enabled=true&screen_width=5120&screen_height=1440&browser_language=zh-CN&browser_platform=Win32'
                    '&browser_name=Edge&browser_version=140.0.0.0'
                    f'&web_rid={self.live_id}'
                    f'&room_id_str={self.room_id}'
                    '&enter_source=&is_need_double_stream=false&insert_task_id=&live_reason=&msToken=' + msToken)
                query = parse_url(url).query
                params = {i[0]: i[1] for i in [j.split('=') for j in query.split('&')]}
                a_bogus = self.get_a_bogus(params)  # 计算a_bogus,成功率不是100%，出现失败时重试即可
                url += f"&a_bogus={a_bogus}"
                headers = self.headers.copy()
                headers.update({
                    'Referer': f'https://live.douyin.com/{self.live_id}',
                    'Cookie': f'ttwid={self.ttwid};__ac_nonce={nonce}; __ac_signature={signature}',
                })
                resp = self.session.get(url, headers=headers, allow_redirects=3)
                if resp.status_code == 200 and len(resp.content) > 0:
                    break

            data = resp.json().get('data', None)
            if not data:
                return None
            display_text = ''
            if data.get('room_status', None) == 0:
                nickname, title = data['user']['nickname'], data['data'][0]['title']
                room_view = data['data'][0]['room_view_stats']['display_long_anchor']
                display_text = f'{nickname} 正在直播：{title} │ {room_view}'
                logger.info(display_text)
            return data.get('room_status', None), display_text, resp.text
        except BaseException:
            logger.error(traceback.format_exc())

    def read_cookies_file(self):
        """
        Read ./cookies.txt if it exists, otherwise return None.
        """
        path = Path("./cookies.txt")
        if path.is_file():
            logger.debug(f"读取 cookies 文件 './cookies.txt'")
            return path.read_text(encoding="utf-8")
        return None

    def _connectWebSocket(self):
        """
        连接抖音直播间websocket服务器，请求直播间数据
        """
        time_ms = round((time.time() - 37) * 1000)
        wss = ("wss://webcast100-ws-web-lq.douyin.com/webcast/im/push/v2/?app_name=douyin_web"
               "&version_code=180800&webcast_sdk_version=1.0.14-beta.0"
               "&update_version_code=1.0.14-beta.0&compress=gzip&device_platform=web&cookie_enabled=true"
               "&screen_width=1536&screen_height=864&browser_language=zh-CN&browser_platform=Win32"
               "&browser_name=Mozilla"
               "&browser_version=5.0%20(Windows%20NT%2010.0;%20Win64;%20x64)%20AppleWebKit/537.36%20(KHTML,"
               "%20like%20Gecko)%20Chrome/126.0.0.0%20Safari/537.36"
               "&browser_online=true&tz_name=Asia/Shanghai"
               "&cursor=d-1_u-1_fh-7392091211001140287_t-1721106114633_r-1"
               f"&internal_ext=internal_src:dim|wss_push_room_id:{self.room_id}|wss_push_did:7319483754668557238"
               f"|first_req_ms:{time_ms}|fetch_time:{time_ms}|seq:1|wss_info:0-{time_ms}-0-0|"
               f"wrds_v:7392094459690748497"
               f"&host=https://live.douyin.com&aid=6383&live_id=1&did_rule=3&endpoint=live_pc&support_wrds=1"
               f"&user_unique_id=7319483754668557238&im_path=/webcast/im/fetch/&identity=audience"
               f"&need_persist_msg_count=15&insert_task_id=&live_reason=&room_id={self.room_id}&heartbeatDuration=0")

        signature = generateSignature(wss)
        wss += f"&signature={signature}"

        cookies = self.read_cookies_file()
        if not cookies:
            cookies = f"ttwid={self.ttwid}"

        headers = {
            "cookie": cookies,
            'user-agent': self.user_agent,
        }
        self.ws = websocket.WebSocketApp(wss,
                                         header=headers,
                                         on_open=self._wsOnOpen,
                                         on_message=self._wsOnMessage,
                                         on_error=self._wsOnError,
                                         on_close=self._wsOnClose)
        try:
            self.ws.run_forever()
        except Exception:
            logger.error(traceback.format_exc())
            self.stop()
            raise

    def _sendHeartbeat(self):
        """
        发送心跳包
        """
        while True:
            with self.cond_stopped:
                if self.cond_stopped.wait(timeout=60):
                    break
            try:
                heartbeat = transport_im.PushFrame(payload_type='hb').SerializeToString()
                self.ws.send(heartbeat, websocket.ABNF.OPCODE_PING)
                logger.debug("【√】发送心跳包")
            except Exception as e:
                logger.error("【X】心跳包检测错误: ", e)
                break
        logger.info("结束心跳线程")

    def _wsOnOpen(self, ws):
        """
        连接建立成功
        """
        logger.info("【√】WebSocket连接成功.")
        threading.Thread(target=self._sendHeartbeat).start()

    def _wsOnMessage(self, ws, message):
        with self.cond_stopped:
            if not self.stopped:
                self._onMessage(ws, message)

    def _onMessage(self, ws, message):
        """
        接收到数据
        :param ws: websocket实例
        :param message: 数据
        """
        method_bindings = {
            'WebcastChatMessage': self._parseChatMsg,  # 聊天消息
            'WebcastGiftMessage': self._parseGiftMsg,  # 礼物消息
            'WebcastLikeMessage': self._muteMsg,  # 点赞消息 _parseLikeMsg
            'WebcastMemberMessage': self._parseMemberMsg,  # 进入直播间消息
            'WebcastSocialMessage': self._parseSocialMsg,  # 关注消息
            'WebcastRoomUserSeqMessage': self._parseRoomUserSeqMsg,  # 直播间统计
            'WebcastFansclubMessage': self._parseFansclubMsg,  # 粉丝团消息
            'WebcastControlMessage': self._parseControlMsg,  # 直播间状态消息
            'WebcastEmojiChatMessage': self._parseEmojiChatMsg,  # 聊天表情包消息
            'WebcastRoomStatsMessage': self._parseRoomStatsMsg,  # 直播间统计信息
            'WebcastRoomMessage': self._parseRoomMsg,  # 直播间信息
            'WebcastRoomRankMessage': self._parseRankMsg,  # 直播间排行榜信息
            'WebcastRoomStreamAdaptationMessage': self._muteMsg,  # 直播间流配置 _parseRoomStreamAdaptationMsg
            'WebcastLuckyBoxMessage': self._parseLuckyBoxMessage,  # 红包
            'WebcastPreviewCjRpMessage': self._parsePreviewCjRpMessage,  # 红包
            'WebcastLuckyBoxRewardMessage': self._parseLuckyBoxRewardMessage,  # 抽奖结果
            'WebcastLotteryDrawResultEventMessage': self._parseLotteryDrawResultEventMessage,  # 抽奖结果
            'WebcastLinkMessage': self._parseLinkMessage,  # 连线信息
            'WebcastScreenChatMessage': self._parseScreenChatMessage,  # 飘屏消息
            'WebcastPrivilegeScreenChatMessage': self._parsePrivilegeScreenChatMessage,  # 飘屏消息
            'WebcastAudioChatMessage': self._parseAudioChatMessage,  # 语音消息
            'WebcastCommonToastMessage': self._parseCommonToastMessage,  # 弹出提示，比如全员放大提示
            'WebcastRoomDataSyncMessage': self._parseRoomDataSyncMessage,
            'WebcastRoomCommentTopicMessage': self._parseRoomCommentTopicMessage,  # 话题
            'WebcastHotChatMessage': self._parseHotChatMessage,  # 热聊话题
            'WebcastAnchorLinkmicSilenceMessage': self._parseAnchorLinkmicSilenceMessage,  # 连线静音
            'WebcastRoomNotifyMessage': self._parseNotifyMessage,  # 直播间公告
            'WebcastRoomMessage': self._parseRoomMessage,  # 直播间消息
            'WebcastNotifyEffectMessage': self._parseNotifyEffectMessage,  # 特效公告
            'WebcastInRoomBannerMessage': self._parseInRoomBannerMessage,  # 横幅
            'WebcastLightGiftMessage': self._muteMsg,  # 多人连线时给某个主播礼物的消息
            'WebcastGiftSortMessage': self._muteMsg,  # UI礼物布局，无可用信息
            'WebcastChatLikeMessage': self._muteMsg,  # 未知
            'WebcastLuckyBoxTempStatusMessage': self._muteMsg,  # 无可用信息
            'WebcastBattleStatusMessage': self._parseBattleStatusMessage,
            'WebcastLinkerContributeMessage': self._muteMsg,  # 未知
            'WebcastProfitInteractionScoreMessage': self._muteMsg,  # 收益性互动分数？
            'WebcastRanklistHourEntranceMessage': self._muteMsg,  # 小时榜、百强榜。人气榜呢？
            'WebcastBattleTeamTaskMessage': self._muteMsg,  # PK分数加成消息
            'WebcastEasterEggDataMessage': self._muteMsg,  # 未知
            'WebcastDecorationModifyMethod': self._muteMsg,  # 未知
            'WebcastDecorationUpdateMessage': self._muteMsg,  # 未知
        }
        muted_messages = [k for k, v in method_bindings.items() if v == self._muteMsg]

        # 根据proto结构体解析对象
        try:
            package = transport_im.PushFrame()
            package.ParseFromString(message)
            headers = {h.key: h.value for h in package.headers}
            payload = package.payload
            if 'gzip' == headers.get('compress_type', 'gzip'):
                payload = gzip.decompress(payload)
            response = transport_im.Response()
            response.ParseFromString(payload)
        except Exception as e:
            logger.error(traceback.format_exc())
            logger.error("While parsing message:")
            self.cascade_log(self._tryDumpJson('PushFrame', message))
            return

        # 返回直播间服务器链接存活确认消息，便于持续获取数据
        if response.need_ack:
            ack = transport_im.PushFrame(LogID=package.LogID,
                                         payload_type='ack',
                                         payload=response.internal_ext.encode('utf-8')
                                         ).SerializeToString()
            ws.send(ack, websocket.ABNF.OPCODE_BINARY)

        if len(response.messages) > 0:
            self.log_json(format_readable_time(response.now, True))
            msgs = [m for m in response.messages if m.method not in muted_messages]
            if len(msgs) > 0:
                self.log_msg(format_readable_time(response.now, True))

        # 根据消息类别解析消息体
        for msg in response.messages:
            method = msg.method
            try:
                json_ = self._tryDumpJson(method, msg.payload)
            except BaseException:
                json_ = self._MessageToJson(msg)
            self.log_json(json_)

            try:
                if method in method_bindings:
                    method_bindings[method](msg.payload)
                else:
                    self.log_msg(json_)
            except Exception as e:
                logger.error(traceback.format_exc())

    def _wsOnError(self, ws: websocket.WebSocket, error):
        if isinstance(error, KeyboardInterrupt):
            return
        logger.error(f"WebSocket error: {type(error)}: {error}")
        logger.error(traceback.format_exc())
        self.stop()

    def _wsOnClose(self, ws, *args):
        self.stop()
        logger.info("WebSocket connection closed.")

    def _MessageToJson(self, m: gp_message.Message):
        return gp_json_format.MessageToJson(m, preserving_proto_field_name=True, ensure_ascii=False, indent=None)

    def _tryGetMethodClass(self, module, method: str):
        known_relation = {
            # 0.0.5
            "LinkMicArmiesMethod": "LinkMicArmies",
            "LinkMicBattleFinishMethod": "LinkMicBattleFinish",
            "LinkMicBattleMethod": "LinkMicBattle",
            "LinkMicBattlePunishMethod": "LinkMicBattlePunish",
            "RoomNotifyMessage": "NotifyMessage",
            # 2026.4.23-beta.12
            "LinkMicArmiesMethod": "LinkMicArmies",
            "LinkMicBattleFinishMethod": "LinkMicBattleFinish",
            "LinkMicBattleMethod": "LinkMicBattle",
            "LinkMicBattlePunishMethod": "LinkMicBattlePunish",
            "RoomNotifyMessage": "NotifyMessage",
            #
            "DecorationModifyMethod": "DecorationModifyMessage",
            # "BattleStatusMessage": "LinkMicBattle",
        }
        if hasattr(module, method):
            pass
        elif method in known_relation and hasattr(module, known_relation[method]):
            method = known_relation[method]
        else:
            return None
        return getattr(module, method)

    def _tryDumpJson(self, method: str, payload: bytes):
        if method.startswith('Webcast'):
            method = method[7:]

        tb_list = []

        for module in self.douyin_proto.values():
            class_ = self._tryGetMethodClass(module, method)
            if class_:
                try:
                    m = class_()
                    m.ParseFromString(payload)
                    return self._MessageToJson(m)
                except BaseException:
                    tb_list.append(traceback.format_exc())

        tb_hint = ''
        if tb_list:
            tb_hint = ' Exceptions while trying to dump the Message:\n' + \
                '------------\n'.join(tb_list)
        raise Exception(f"Unknown method '{method}'.{tb_hint}")

    def _parseFromString(self, class_: str, data: bytes, module=webcast_im) -> gp_message.Message:
        m = getattr(module, class_)()
        m.ParseFromString(data)
        return m

    def _muteMsg(self, _):
        return None

    def _parseChatMsg(self, payload):
        """聊天消息"""
        m = self._parseFromString('ChatMessage', payload)
        u = m.user
        badge = f"({u.pay_grade.level} {u.fans_club.data.level})"
        self.log_msg(f"【聊天】{badge} {m.user.nickname}：{m.content}")

    def _parseGiftMsg(self, payload):
        """礼物消息"""
        m = self._parseFromString('GiftMessage', payload)
        repeat_end_hint = '（连击结束）' if (m.repeat_end and m.combo_count > 1) else ''
        self.log_msg(f"【礼物】{m.user.nickname} 送出了 {m.gift.name} ×{m.combo_count}{repeat_end_hint}")

    def _parseLikeMsg(self, payload):
        '''点赞消息'''
        m = self._parseFromString('LikeMessage', payload)
        self.log_msg(f"【点赞】{m.user.nickname} 点了{m.count}个赞")

    def _parseMemberMsg(self, payload):
        '''进入直播间消息'''
        m = self._parseFromString('MemberMessage', payload)
        u = m.user
        gender = ['X', '男', '女'][u.gender]
        self.log_msg(
            f"【进场】[{u.id}][{gender}]{u.nickname}("
            f"{u.pay_grade.level},{u.fans_club.data.level},"
            f"{u.follow_info.following_count},{u.follow_info.follower_count}"
            f") 来了")

    def _parseSocialMsg(self, payload):
        '''社交消息'''
        m = self._parseFromString('SocialMessage', payload)
        follow_count_hint = f'。主播当前粉丝 {m.follow_count}' if m.action == 1 else ''
        self.log_msg(f"【社交】{render_text(m.common.display_text)}{follow_count_hint}")

    def _parseRoomUserSeqMsg(self, payload):
        '''直播间统计'''
        m = self._parseFromString('RoomUserSeqMessage', payload)
        self.log_msg(
            f"【统计】在线 {m.total_str}({m.total})，场观 {m.total_pv_for_anchor}({m.total_user})")

    def _parseFansclubMsg(self, payload):
        '''粉丝团消息'''
        m = self._parseFromString('FansclubMessage', payload)
        if m.content:
            self.log_msg(f"【粉丝团】{m.content}")

    def _parseEmojiChatMsg(self, payload):
        '''聊天表情包消息'''
        m = self._parseFromString('EmojiChatMessage', payload)
        self.log_msg(f"【表情包】 {m.user.nickname}: {render_text(m.emoji_content)}")

    def _parseRoomMsg(self, payload):
        m = self._parseFromString('RoomMessage', payload)
        self.log_msg(f"【直播间】直播间id:{m.common.room_id}")

    def _parseRoomStatsMsg(self, payload):
        m = self._parseFromString('RoomStatsMessage', payload)
        self.log_msg(f"【直播间统计】在线观众 {m.display_middle}({m.total})")

    def _parseRankMsg(self, payload):
        m = self._parseFromString('RoomRankMessage', payload)
        user_names = [r.user.nickname for r in m.audience_ranks]
        self.log_msg(f"【直播间排行榜】{' │ ' .join(user_names)}")

    def _parseControlMsg(self, payload):
        '''直播间状态消息'''
        m = self._parseFromString('ControlMessage', payload)
        if m.action in [3, 4, 6]:
            tips = '直播已结束' if not m.tips else m.tips
            self.log_msg(tips)
            logger.info(tips)
            self.stop()
        else:
            self.log_msg(self._MessageToJson(m))

    def _parseRoomStreamAdaptationMsg(self, payload):
        m = self._parseFromString('RoomStreamAdaptationMessage', payload)
        self.log_msg(f'直播间adaptation: {m.adaptation_type}')

    def _parseLuckyBoxMessage(self, payload):
        m = self._parseFromString('LuckyBoxMessage', payload)
        self.log_msg(f"【红包】{m.user.nickname} 送出红包，价值 {m.diamond_count}，标题：{m.title}")

    def _parsePreviewCjRpMessage(self, payload):
        m = self._parseFromString('PreviewCjRpMessage', payload)
        cjrp = m.cjrp
        num = f'{cjrp.left_num}/{cjrp.total_num}'
        amount = f'{cjrp.left_amount}/{cjrp.total_amount}'
        currency = '钻' if cjrp.currency == 'Diamond' else cjrp.currency
        timing = f'时间 {format_readable_time(cjrp.send_time)} ~ {format_readable_time(cjrp.expire_time)}'
        self.log_msg(f"【红包】{cjrp.text} 剩余 {num}个，价值 {amount}({currency})，{timing}")

    def _parseLuckyBoxRewardMessage(self, payload):
        m = self._parseFromString('LuckyBoxRewardMessage', payload)
        l: List[str] = m.rewarded_user_id
        self.log_msg(f"【红包中奖结果】{len(l)}人中奖。中奖用户ID：{' │ '.join([str(i) for i in l])}")

    def _parseLotteryDrawResultEventMessage(self, payload):
        m = self._parseFromString('LotteryDrawResultEventMessage', payload)
        candidate_hint = ''
        try:
            candidate_num = json.loads(m.extra)['candidate_num']
            candidate_hint = f'，{candidate_num}人参与'
        except BaseException:
            pass
        self.log_msg(f"【福袋抽奖结果】{len(m.user_ids)}人中奖{candidate_hint}。中奖用户ID：{' │ '.join([str(i) for i in m.user_ids])}")

    def _parseLinkMessage(self, payload):
        m = self._parseFromString('LinkMessage', payload)
        oneof = m.WhichOneof('content')
        if not oneof:
            self.log_msg(f"【连线】  Unrecognized LinkMessage: content oneof={oneof}, dump: {self._MessageToJson(m)}")
            return

        def print_linked_users(fmt: str, linked_users: List) -> Tuple[int, str]:
            users: List[str] = []
            for e in linked_users:
                users.append(f'{e.user.nickname}({e.user.id})')
                if e.content.linkmic_content.host_name:
                    users[-1] += ' ' + e.content.linkmic_content.host_name
            # return len(linked_users), ' │ ' .join(users)
            if len(linked_users) > 0:
                self.log_msg(fmt.format(n_users=len(linked_users), s_users=' │ ' .join(users)))

        content = getattr(m, oneof)
        if oneof == 'linked_list_change_content':
            print_linked_users("【连线 变化】{n_users}位连线主播：{s_users}", content.linked_users)
        elif oneof == 'switch_scene_content':
            print_linked_users("【连线 切换场景】{n_users}位连线主播：{s_users}", content.switch_scene_data.linked_users)
        elif oneof == 'enter_content':
            users = [u for m in content.linker_content_map.values() for u in m.linked_users]
            print_linked_users("【连线 入场】{n_users}位入场主播：{s_users}", users)
            print_linked_users("【连线 变化】{n_users}位连线主播：{s_users}", content.linked_users)
        elif oneof == 'leave_content':
            # users = [u for m in content.linker_content_map.values() for u in m.linked_users]
            # print_linked_users("【连线 离场】{n_users}位离场主播：{s_users}", users)
            print_linked_users("【连线 离场】{n_users}位离场主播：{s_users}", content.linked_users)
        elif oneof == 'audience_waiting_list_change':
            self.log_msg(f"【连线 等待连线】{content.total_waiting_cnt}位等待用户")
        else:
            self.log_msg(f"【连线 {oneof}】content: {self._MessageToJson(content)}")

    def _parseScreenChatMessage(self, payload):
        m = self._parseFromString('ScreenChatMessage', payload)
        self.log_msg(f"【飘屏 {m.screen_chat_type}】{m.user.nickname}：{m.content}")

    def _parsePrivilegeScreenChatMessage(self, payload):
        m = self._parseFromString('PrivilegeScreenChatMessage', payload)
        self.log_msg(f"【飘屏 样式等级{m.style}】{m.user.nickname}：{m.content}")

    def _parseAudioChatMessage(self, payload):
        m = self._parseFromString('AudioChatMessage', payload)
        self.log_msg(
            f"【语音 {math.ceil(m.audio_duration/1000)}s】{m.user.nickname}：{m.content} ({m.audio_url})")

    def _parseCommonToastMessage(self, payload):
        m = self._parseFromString('CommonToastMessage', payload)
        self.log_msg(f"【弹出提示】{render_text(m.common.display_text)}")

    def _parseRoomDataSyncMessage(self, payload_):
        m = self._parseFromString('RoomDataSyncMessage', payload_)
        payload = self._parseFromString(m.syncKey, m.payload)
        self.log_json(f'  {m.syncKey}={self._MessageToJson(payload)}')
        handled = False
        if m.syncKey == 'RoomLinkMicSyncData':
            link_type_map = {1: '视频连线', 2: '语音连线'}
            users = []
            for e in payload.linked_users:
                users.append(f'{e.user.nickname}({e.user.id})')
                if e.link_type in link_type_map:
                    users[-1] += ' ' + link_type_map[e.link_type]
            self.log_msg(f"【连线状态同步】{len(users)}位连线用户：{' │ ' .join(users)}")
            handled = True
        elif m.syncKey == 'LotteryInfoSyncData':
            lottery = payload
            timing = f'时间 {format_readable_time(lottery.start_time)} ~ {format_readable_time(lottery.draw_time)}'
            if lottery.lottery_type == 1:
                self.log_msg(
                    f"【福袋】{lottery.lucky_count}个，{lottery.prize_count}钻，{lottery.candidate_total_count}人参与，{timing}")
                handled = True
        elif m.syncKey == 'HighlightContainerSyncData':
            all_parsed = True
            for item in payload.highlight_items:
                if item.data_type == 4:
                    if item.end_time > time.time():
                        continue
                    self.log_msg(f'【置顶评论】{item.comment_data.nick_name}：{item.comment_data.content}')
                else:
                    all_parsed = False
            handled = all_parsed
        elif m.syncKey == 'DoubleLikeSyncData':
            self.log_msg(f"【双倍点赞】{render_text(payload.normal_display_text)}")
            handled = True
        elif m.syncKey == 'PreviewPromotionSyncData':
            if payload.type == 2 and payload.lucky_money.display_end_at < time.time():
                self.log_msg(f"【红包信息】{payload.lucky_money.text}")
                handled = True

        if not handled:
            self.log_msg(f'【RoomDataSyncMessage】  {m.syncKey}={self._tryDumpJson(m.syncKey, m.payload)}')

    def _parseRoomCommentTopicMessage(self, payload):
        m = self._parseFromString('RoomCommentTopicMessage', payload)
        l = m.comment_topic_chat_list
        s = ' │ '.join([f"{e.guide_text}：{e.featured_chat}" for e in l])
        self.log_msg(f'【话题】{s}')

    def _parseHotChatMessage(self, payload):
        m = self._parseFromString('HotChatMessage', payload)
        text = f'{m.title}："{m.content}" ×{m.num[-1]}'
        self.log_msg(f'【热聊话题】{text}')

    def _parseAnchorLinkmicSilenceMessage(self, payload):
        m = self._parseFromString('AnchorLinkmicSilenceMessage', payload)
        silence_action = {1: '静音', 2: '取消静音'}.get(m.silence_action)
        self.log_msg(f'【静音】{m.from_user_id} 将 {m.to_user_id} {silence_action} 了')

    def _parseNotifyMessage(self, payload):
        m = self._parseFromString('NotifyMessage', payload)
        self.log_msg('【直播间公告】' + render_text(m.common.display_text))

    def _parseRoomMessage(self, payload):
        m = self._parseFromString('RoomMessage', payload)
        self.log_msg('【直播间消息】' + render_text(m.common.display_text))

    def _parseNotifyEffectMessage(self, payload):
        m = self._parseFromString('NotifyEffectMessage', payload)
        text = ([item.text_item.text for item in m.text_v2.display_items if item.display_item_type == 2] or [None])[0]
        if text:
            self.log_msg('【特效公告】' + render_text(text))

    def _parseInRoomBannerMessage(self, payload):
        m = self._parseFromString('InRoomBannerMessage', payload)
        self.log_json(f'  extra={m.extra}')

        extra = json.loads(m.extra)
        handled = False
        if extra.get('unique_key', '') == 'wishList':
            wish_list = json.loads(extra['wishList'])
            wishes: List[str] = []
            for wish in wish_list['wish_banner_data']['banner_wish_list']:
                infos: List[str] = []
                for info in wish['wish_info_list']:
                    logger.info(info)
                    infos.append(
                        f"{info['wish_info_extra']['gift_alias']} ({info['wish_info_extra']['diamond_count']} 钻)"
                        f" {info.get('current_progress',0)}/{info['target_progress']}")
                wishes.append(wish['wish_name'] + '：' + ' '.join(infos))
            self.log_msg('【横幅 心愿单】' + ' │ '.join(wishes))
            handled = True

        if not handled:
            if ('多阶段任务_' in m.extra) or ('万粉团' in m.extra) or (
                '新星I' in m.extra
            ):
                return
            self.log_msg(f'【InRoomBannerMessage】  {self._MessageToJson(m)}')

    def _parseBattleStatusMessage(self, payload):
        m = self._parseFromString('BattleStatusMessage', payload)
        status = {1: '开始', 2: '惩罚', 3: '结束'}.get(m.status, f'状态 {m.status}')
        duration = (int(m.end_time_ms) - int(m.start_time_ms)) // 1000
        punish_hint = f'，惩罚时长{m.punish_duration}秒' if m.status == 2 else ''
        self.log_msg(
            f'【PK {status}】时间{duration}秒，{format_readable_time(m.start_time_ms[:-3])} ~ {format_readable_time(m.end_time_ms[:-3])}{punish_hint}')
