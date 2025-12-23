#!/usr/bin/python
# coding:utf-8

# @FileName:    liveMan.py
# @Time:        2024/1/2 21:51 (Updated for Display ID priority)
# @Author:      bubu
# @Project:     douyinLiveWebFetcher

import codecs
import gzip
import hashlib
import random
import re
import string
import subprocess
import threading
import time
import execjs
import urllib.parse
from contextlib import contextmanager
from unittest.mock import patch
import sys
import io
import os

import requests
import websocket
from py_mini_racer import MiniRacer

from ac_signature import get__ac_signature
# Assuming 'protobuf.douyin' resolves to a module containing all required classes
from protobuf.douyin import * 
from urllib3.util.url import parse_url
from datetime import datetime
import csv

import yaml
from collections import defaultdict
from typing import Dict, Any, Tuple, Optional


def parse_chinese_number(text): #万转成数字
    try:
        if isinstance(text, str):
            if '万' in text:
                num = float(text.replace('万', '')) * 10000
            else:
                num = float(text)
            return int(num)
        return int(text)
    except Exception:
        return 0


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

diamond_totals = defaultdict(lambda: {"name": "", "diamonds": 0})

# --- Signature Initialization Fix ---
_signature_ctx = None # Module-level variable for single-time initialization

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
    生成 WebSocket 连接所需的签名参数。
    FIXED: Initialized MiniRacer only once globally for performance.
    """
    global _signature_ctx
    
    if _signature_ctx is None:
        try:
            with codecs.open(script_file, 'r', encoding='utf8') as f:
                script = f.read()
            ctx = MiniRacer()
            ctx.eval(script)
            _signature_ctx = ctx
            print(f"【√】Signature JS Context initialized.", flush=True)
        except Exception as e:
            print(f"【X】Signature JS Context initialization failed: {e}", flush=True)
            return "" # Return empty string on failure

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
    
    try:
        signature = _signature_ctx.call("get_sign", md5_param)
        return signature
    except Exception as e:
        print(f"【X】Signature calculation error: {e}") # Print the error to console
        return ""


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


class DouyinLiveWebFetcher:

    def __init__(self, live_id, abogus_file='a_bogus.js', config_path="message_handlers.yml"):
        self.abogus_file = abogus_file
        self.__ttwid = None
        self.__room_id = None
        self.session = requests.Session()
        self.live_id = live_id
        self.host = "https://www.douyin.com/"
        self.live_url = "https://live.douyin.com/"
        
        # User Agent Rotation for robustness
        desktop_uas = [
            "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36 Edg/120.0.0.0",
            "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36",
            "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.0 Safari/605.1.15",
            "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125.0.0.0 Safari/537.36",
        ]
        self.user_agent = random.choice(desktop_uas)
        self.headers = {
            'User-Agent': self.user_agent
        }

        # Load configuration
        with open(config_path, "r", encoding="utf-8") as f:
            self.handler_config = yaml.safe_load(f)
            
        # Concurrency Locks (RE-INTRODUCED for thread safety)
        self._lock_data = threading.Lock()           # For self.total_diamonds, self.user_diamond_totals, self.user_level_cache
        self._lock_buffer = threading.Lock()         # For gift combo buffer
        self._lock_log = threading.Lock()            # For self.log_buffers
            
        # Configurable Gift combo delay
        self.gift_combo_delay = self.handler_config.get("gift_combo_delay_seconds", 3.0) 
        self.total_diamonds = 0
        self.user_diamond_totals = {}
        
        # Stream Session ID for cross-day logging
        self.stream_session_id = None 
        
        # Cache for User Levels (Used for chat and gift messages)
        self.user_level_cache = {} 
        
        # Inactivity monitoring parameters
        self.inactivity_timeout_seconds = self.handler_config.get("inactivity_interval_seconds", 300)
        self.last_message_time = time.time()
        

        # Runtime settings
        self.heartbeat_interval = self.handler_config.get("heartbeat_interval", 5)
        self.retry_on_failure = self.handler_config.get("retry_on_failure", True)
        self.max_retries = self.handler_config.get("max_retries", 3)
        self.retry_delay_seconds = self.handler_config.get("retry_delay_seconds", 10)
        
        # --- MERGED RECONNECTION / CONTROL FLAGS (from File 2 logic) ---
        self._running = True        # Flag to control overall execution
        self._disconnect_count = 0  # Counter for consecutive disconnections/failures
        self._mail_sent = False     # Flag for notification status

        self.logging_cfg = self.handler_config.get("logging", {})
        self.log_folder = self.logging_cfg.get("folder", "logs")
        self.log_format = self.logging_cfg.get("format", "csv")
        self.rotate_daily = self.logging_cfg.get("rotate_daily", True)
        self.include_timestamp = self.logging_cfg.get("include_timestamp", True)

        os.makedirs(self.log_folder, exist_ok=True)

        self.gift_combo_buffer = {}  # (user_key, gift_id) → {count, value, timer, diamond_value_per_item, ...}
        
        # Batch Logging Initialization
        self.log_buffers = defaultdict(list)
        # Setting daemon=True ensures this thread does not prevent program exit
        threading.Thread(target=self._log_flush_thread, daemon=True).start()
        
        # Centralized Handler Map
        self.dispatch_map = {
            msg_type: getattr(self, cfg["handler"])
            for msg_type, cfg in self.handler_config.items()
            if isinstance(cfg, dict) and cfg.get("enabled", False)
        }
        
    def _notify_disconnect(self):
        """Notification logic (Placeholder, user requested to exclude send_mail.py)."""
        self._mail_sent = True
        msg = "【!】连续连接失败次数超过 5 次，已触发通知 (未发送邮件，请检查网络或配置)."
        print(msg)


    def _set_stream_session_id(self):
        """Generates a unique ID for this script execution session (stream)."""
        timestamp = datetime.now().strftime("%Y%m%d_%H%M%S")
        self.stream_session_id = f"{self.live_id}_{timestamp}"
        print(f"【Stream Session ID】Set for current session: {self.live_id}_{timestamp}")
            
    def start(self, retry_interval=5):
            """
            主循环：只负责控制运行状态
            """
            self._running = True
            while self._running:
                try:
                    # 不再在这里设置 Session ID
                    self._connectWebSocket()
                except Exception as e:
                    if not self._running:
                        break
                    msg = f"【X】WebSocket主循环异常: {e}"
                    print(msg)

                if self._running:
                    msg = f"【!】连接已断开或结束，{self.retry_delay_seconds} 秒后尝试重新进入直播间..."
                    print(msg)
                    time.sleep(self.retry_delay_seconds)
        
    def stop(self):
        """Explicitly stop the fetcher (from File 2)."""
        self._running = False
        self._flush_logs() 
        if hasattr(self, 'ws') and self.ws:
            try:
                self.ws.close()
            except:
                pass
    
    @property
    def ttwid(self):
        if self.__ttwid:
            return self.__ttwid
        headers = {
            "User-Agent": self.user_agent,
        }
        try:
            response = self.session.get(self.live_url, headers=headers)
            response.raise_for_status()
        except Exception as err:
            print("【X】Request the live url error: ", err)
        else:
            self.__ttwid = response.cookies.get('ttwid')
            return self.__ttwid
    
    @property
    def room_id(self):
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
            print("【X】Request the live room url error: ", err)
        else:
            match = re.search(r'roomId\\":\\"(\d+)\\"', response.text)
            if match is None or len(match.groups()) < 1:
                print("【X】No match found for roomId")
            
            self.__room_id = match.group(1)
            
            return self.__room_id

    
    def get_ac_nonce(self):
        resp_cookies = self.session.get(self.host, headers=self.headers).cookies
        return resp_cookies.get("__ac_nonce")
    
    def get_ac_signature(self, __ac_nonce: str = None) -> str:
        __ac_signature = get__ac_signature(self.host[8:], __ac_nonce, self.user_agent)
        self.session.cookies.set("__ac_signature", __ac_signature)
        return __ac_signature
    
    def get_a_bogus(self, url_params: dict):
        url = urllib.parse.urlencode(url_params)
        ctx = execute_js(self.abogus_file)
        _a_bogus = ctx.call("get_ab", url, self.user_agent)
        return _a_bogus
    
    def get_room_status(self):
        msToken = generateMsToken()
        nonce = self.get_ac_nonce()
        signature = self.get_ac_signature(nonce)
        url = ('https://live.douyin.com/webcast/room/web/enter/?aid=6383'
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
        resp = self.session.get(url, headers=headers)
        data = resp.json().get('data')
        if data:
            room_status = data.get('room_status')
            user = data.get('user')
            user_id = user.get('id_str')
            nickname = user.get('nickname')

            self.streamer_name = nickname  

            print(f"【{nickname}】[{user_id}]直播间：{['正在直播', '已结束'][bool(room_status)]}.")
            return room_status


    def _connectWebSocket(self):
            """
            连接抖音直播间websocket服务器，请求直播间数据 
            Uses internal retry logic with max_retries, and updates disconnect counter on failure.
            """
            # NEW: Refresh the Stream Session ID every time a new connection cycle starts
            # This ensures that if the watchdog restarts the connection, a new log session is created.
            self._set_stream_session_id()

            attempt = 0
            while attempt < self.max_retries and self._running:
                try:
                    # Dynamic WSS URL Timestamps for fresh connection
                    current_ms = int(time.time() * 1000)
                    cursor_fetch_time = current_ms - 100 
                    first_req_ms = current_ms - 1000 

                    wss = (
                        "wss://webcast100-ws-web-lq.douyin.com/webcast/im/push/v2/?app_name=douyin_web"
                        "&version_code=180800&webcast_sdk_version=1.0.14-beta.0"
                        "&update_version_code=1.0.14-beta.0&compress=gzip&device_platform=web&cookie_enabled=true"
                        "&screen_width=1536&screen_height=864&browser_language=zh-CN&browser_platform=Win32"
                        "&browser_name=Mozilla"
                        "&browser_version=5.0%20(Windows%20NT%2010.0;%20Win64;%20x64)%20AppleWebKit/537.36%20(KHTML,"
                        "%20like%20Gecko)%20Chrome/126.0.0.0%20Safari/537.36"
                        "&browser_online=true&tz_name=Asia/Shanghai"
                        f"&cursor=d-1_u-1_fh-7392091211001140287_t-{cursor_fetch_time}_r-1"
                        f"&internal_ext=internal_src:dim|wss_push_room_id:{self.room_id}|wss_push_did:7319483754668557238"
                        f"|first_req_ms:{first_req_ms}|fetch_time:{cursor_fetch_time}|seq:1|wss_info:0-{cursor_fetch_time}-0-0|"
                        f"wrds_v:7392094459690748497"
                        f"&host=https://live.douyin.com&aid=6383&live_id=1&did_rule=3&endpoint=live_pc&support_wrds=1"
                        f"&user_unique_id=7319483754668557238&im_path=/webcast/im/fetch/&identity=audience"
                        f"&need_persist_msg_count=15&insert_task_id=&live_reason=&room_id={self.room_id}&heartbeatDuration=0"
                    )

                    signature = generateSignature(wss)
                    wss += f"&signature={signature}"

                    headers = {
                        "cookie": f"ttwid={self.ttwid}",
                        'user-agent': self.user_agent,
                    }

                    self.ws = websocket.WebSocketApp(
                        wss,
                        header=headers,
                        on_open=self._wsOnOpen,
                        on_message=self._wsOnMessage,
                        on_error=self._wsOnError,
                        on_close=self._wsOnClose
                    )

                    print(f"【连接尝试】第 {attempt + 1} 次连接 WebSocket...")
                    # Ensure last_message_time is reset at the moment of connection attempt
                    self.last_message_time = time.time()
                    self.ws.run_forever()
                    break # If run_forever returns (closed), break the retry loop

                except Exception as e:
                    print(f"【连接失败】{e}")
                    attempt += 1
                    if not self.retry_on_failure or attempt >= self.max_retries:
                        print("【终止】已达到最大重试次数或关闭重试功能。")
                        
                        # Track persistent failure
                        self._disconnect_count += 1 
                        if self._disconnect_count > 5 and not self._mail_sent:
                            self._notify_disconnect()
                            
                        break # Exit retry loop
                    print(f"【重试中】将在 {self.retry_delay_seconds} 秒后重试...")
                    time.sleep(self.retry_delay_seconds)
                    
            if not self._running:
                print("【_connectWebSocket】程序已通过外部调用停止。")
    def _sendHeartbeat(self):
        # Optimized with error handling for stability
        while True:
            try:
                # Check if WebSocket object exists and is connected
                if not hasattr(self, 'ws') or not getattr(self.ws, 'sock', None) or not self.ws.sock.connected:
                    print("【X】心跳线程退出: WebSocket连接已断开。", flush=True)
                    break
                    
                heartbeat = PushFrame(payload_type='hb').SerializeToString()
                self.ws.send(heartbeat, websocket.ABNF.OPCODE_BINARY) 
                print("【√】发送心跳包")
                
            except websocket.WebSocketConnectionClosedException:
                 print("【X】心跳线程退出: WebSocket连接已关闭。", flush=True)
                 break
            except Exception as e:
                print(f"【X】心跳包检测错误: {e}")
                break
            else:
                time.sleep(self.heartbeat_interval)
    
    
    def _wsOnOpen(self, ws):
        print("【√】WebSocket连接成功.")
        self._disconnect_count = 0
        self._mail_sent = False
        self.last_message_time = time.time()
        
        # Start the heartbeat and the new watchdog monitor
        threading.Thread(target=self._sendHeartbeat, daemon=True).start()
        threading.Thread(target=self._monitor_activity, daemon=True).start()
        
    def _wsOnMessage(self, ws, message):
            """
            接收到数据
            """
            # Update inactivity timer only for non-heartbeat messages
            try:
                package = PushFrame().parse(message)
                
                # CRITICAL: Only update activity timer if it's NOT a heartbeat ('hb')
                # This ensures the watchdog restarts if only heartbeats are being received.
                if package.payload_type != 'hb':
                    self.last_message_time = time.time()
                
                response = Response().parse(gzip.decompress(package.payload))
            except Exception as e:
                # Treat messages that fail decompression/parsing as activity if they passed the pushframe check
                print(f"【X】Message decompression/parsing failed: {e}")
                return

            if response.need_ack:
                ack = PushFrame(
                    log_id=package.log_id,
                    payload_type='ack',
                    payload=response.internal_ext.encode('utf-8')
                ).SerializeToString()
                ws.send(ack, websocket.ABNF.OPCODE_BINARY)

            dispatch_map = self.dispatch_map 

            for msg in response.messages_list:
                method = msg.method
                handler = dispatch_map.get(method)
                if handler:
                    try:
                        handler(msg.payload)
                    except Exception as e:
                        print(f"【处理失败】{method}: {e}")

    # Batch Logging Flush Thread
    def _log_flush_thread(self):
        """Flushes logs periodically."""
        while True:
            time.sleep(1.0) 
            self._flush_logs()

    def _flush_logs(self):
        """Writes all buffered logs to files."""
        # Use lock to safely access and clear the buffer
        with self._lock_log:
            buffers_to_flush = self.log_buffers.copy()
            self.log_buffers.clear()
        
        for full_filename_key, buffer_data in buffers_to_flush.items():
            if not buffer_data:
                continue
            
            headers = buffer_data[0]
            rows = buffer_data[1:]

            filename = full_filename_key 
            
            filepath = os.path.join(self.log_folder, f"{filename}.{self.log_format}")
            file_exists = os.path.isfile(filepath)
            
            # File I/O outside the lock
            try:
                with open(filepath, mode="a", newline="", encoding="utf-8-sig") as file:
                    writer = csv.writer(file)
                    if not file_exists:
                        writer.writerow(headers)
                    writer.writerows(rows)
            except Exception as e:
                 print(f"【X】Log flush error for {filepath}: {e}")


    
    def log_message(self, filename_key, headers, row):
        """Buffers a message row for later batch writing, using stream ID for file naming."""
        
        # Use Stream Session ID for cross-day file persistence
        if self.stream_session_id:
            final_filename_key = f"{self.stream_session_id}_{filename_key}"
        elif self.rotate_daily:
            date_str = datetime.now().strftime("%Y%m%d")
            final_filename_key = f"{date_str}_{filename_key}"
        else:
            final_filename_key = filename_key 
        
        # Use lock to safely update the log buffer
        with self._lock_log:
            if final_filename_key not in self.log_buffers:
                self.log_buffers[final_filename_key].append(headers) 
            
            self.log_buffers[final_filename_key].append(row)

    
    # FIXED: Robust console encoding for errors
    def _wsOnError(self, ws, error):
        """Handles WebSocket errors gracefully, even with console encoding issues."""
        try:
            # NEW: Check for NoneType before processing
            if error is None:
                safe_error = "Unknown Error (NoneType received)"
            else:
                # Get the console's output encoding, default to 'utf-8' if unavailable.
                console_encoding = sys.stdout.encoding or 'utf-8'
                
                # Attempt robust encoding/decoding
                safe_error = str(error).encode('utf-8', errors='replace').decode(console_encoding, errors='replace')
            
            print(f"WebSocket error: {safe_error}")
            
        except Exception:
            # Fallback
            try:
                sys.stderr.write("WebSocket error: <unprintable>\n")
            except Exception:
                pass

    
    def _wsOnClose(self, ws, close_status_code=None, close_msg=None):
        if close_status_code is not None or close_msg is not None:
            print(f"WebSocket connection closed. Status Code: {close_status_code}, Message: {close_msg}")
        else:
            print("WebSocket connection closed.")
        
        self._flush_logs() 
        
        # Check running flag to allow graceful termination
        if not self._running:
            print("【_wsOnClose】程序已通过外部调用停止。")
            return
            
        self.get_room_status()
        
        while self._running: # Check running flag here
            room_status = self.get_room_status()
            if room_status == 0:
                print("【√】检测到直播重新开始，尝试连接 WebSocket...")
                time.sleep(5)
                self._connectWebSocket()
                break
            else:
                print("【...】直播仍未开始，30秒后重试")
                if not self._running: # Double check if stop was called during sleep
                    break
                time.sleep(30)
    
    def _parseChatMsg(self, payload):
        """聊天消息：更新用户等级缓存，使用 display_id 作为用户键。"""
        
        # Helper to extract levels
        def _extract_levels_from_message(message):
            pay_grade_level = getattr(getattr(message.user, 'pay_grade', None), 'level', 0)
            fans_club_data = getattr(message.user.fans_club, 'data', None)
            fans_club_level = getattr(fans_club_data, 'level', 0)
            
            pay_grade_str = str(pay_grade_level) if pay_grade_level > 0 else "无"
            fans_club_str = str(fans_club_level) if fans_club_level > 0 else "无"
            
            return pay_grade_str, fans_club_str
            
        try:
            message = ChatMessage().parse(payload)
            user_name = message.user.nick_name
            long_id = str(message.user.id) 
            content = message.content
            
            # --- ID Extraction Logic (Display ID priority) ---
            display_id = getattr(message.user, 'display_id', None)
            short_id = getattr(message.user, 'short_id', None)
            
            user_key = str(display_id) if display_id and str(display_id) != '' and str(display_id) != '0' else None
            
            if not user_key:
                user_key = str(short_id) if short_id and str(short_id) != '0' else None
            
            if not user_key:
                 user_key = long_id
            
            
            cfg = self.handler_config.get("WebcastChatMessage", {})
            show_user_id = cfg.get("show_user_id", True)
            show_fans_club = cfg.get("show_fans_club", True)
            show_pay_grade = cfg.get("show_pay_grade", True)
            log_to_csv = cfg.get("log_to_csv", False)

            pay_grade, fans_club = _extract_levels_from_message(message)

            # Update User Level Cache using user_key
            if long_id != '111111': 
                with self._lock_data:
                    self.user_level_cache[user_key] = {
                        "pay_grade": pay_grade,
                        "fans_club": fans_club,
                        "nickname": user_name
                    }
            
            # 显示记录
            display_parts = []
            if show_fans_club:
                display_parts.append(f"[粉丝:{fans_club}]")
            if show_pay_grade:
                display_parts.append(f"[财富:{pay_grade}]")
            
            # Use user_key for display if not anonymous
            if show_user_id and long_id != '111111':
                display_parts.append(f"[{user_key}]{user_name}")
            else:
                display_parts.append(user_name)

            print(f"【聊天msg】{' '.join(display_parts)}: {content}")


            # CSV 记录
            if log_to_csv:
                headers = ["时间", "id", "昵称", "粉丝团", "财富等级", "内容"]
                row = [
                    datetime.now().strftime("%Y-%m-%d %H:%M:%S") if self.include_timestamp else "",
                    user_key if show_user_id else "", # Use user_key here
                    user_name,
                    fans_club if show_fans_club else "",
                    pay_grade if show_pay_grade else "",
                    content
                ]
                self.log_message(f"chat_log", headers, row)


            return message
        except Exception as e:
            print(f"【聊天msg】解析失败: {e}")
            return None


    def _parseGiftMsg(self, payload):
        """
        礼物消息：包含组合礼物缓冲、累计钻石逻辑，并将**用户等级信息存入缓冲区**。
        
        **规则:** 礼物数量取当前和历史最高值 (Max Count)，总价值基于最高数量和单价重新计算 (No Accumulation).
        """
        # Helper to extract levels
        def _extract_levels_from_message(message):
            pay_grade_level = getattr(getattr(message.user, 'pay_grade', None), 'level', 0)
            fans_club_data = getattr(message.user.fans_club, 'data', None)
            fans_club_level = getattr(fans_club_data, 'level', 0)
            
            pay_grade_str = str(pay_grade_level) if pay_grade_level > 0 else "无"
            fans_club_str = str(fans_club_level) if fans_club_level > 0 else "无"
            
            return pay_grade_str, fans_club_str
            
        try:
            message = GiftMessage().parse(payload)
            user_name = message.user.nick_name
            long_id = message.user.id
            gift_id = message.gift.id
            gift_name = message.gift.name
            gift_diamond_value = message.gift.diamond_count # Value per item

            # --- ID Extraction Logic (Display ID priority) ---
            display_id = getattr(message.user, 'display_id', None)
            short_id = getattr(message.user, 'short_id', None)
            
            user_key = str(display_id) if display_id and str(display_id) != '' and str(display_id) != '0' else None
            if not user_key:
                user_key = str(short_id) if short_id and str(short_id) != '0' else None
            if not user_key:
                 user_key = str(long_id)
            
            # Use 'total_count' which represents the running total in modern streams, or fallback to 'combo_count'
            gift_cnt_current_message = getattr(message, 'total_count', getattr(message, 'combo_count', 1))
            if gift_cnt_current_message < 1:
                gift_cnt_current_message = 1
                
            # Current levels (for initial buffer store)
            pay_grade, fans_club = _extract_levels_from_message(message)

            key = (user_key, gift_id) # Use the robust key

            # Define log_final_gift
            def log_final_gift():
                data = self.gift_combo_buffer.pop(key, None)
                if not data:
                    return
                
                # Retrieve final data from buffer
                total_cnt = data["count"]
                total_value = data["value"] # This value is already calculated based on MAX count
                
                # Update diamond totals
                with self._lock_data:
                    self.total_diamonds += total_value # Use the final, correct total value
                    
                    # Update user_diamond_totals using the determined user_key
                    if key[0] not in self.user_diamond_totals:
                        self.user_diamond_totals[key[0]] = {"name": data["user_name"], "diamonds": 0}
                    self.user_diamond_totals[key[0]]["diamonds"] += total_value
                
                # Print Statement
                log_pay_grade = data.get("pay_grade", "无")
                log_fans_club = data.get("fans_club", "无")
                log_user_name = data.get("user_name", "未知用户")
                level_info = f"[财富:{log_pay_grade}] [粉丝:{log_fans_club}]"
                print(f"【礼物msg】{level_info} [ID:{key[0]}] {log_user_name} 最终送出 {gift_name} x{total_cnt} (价值: {total_value})")
                
                # CSV Logging
                if self.handler_config.get("WebcastGiftMessage", {}).get("log_to_csv", False):
                    headers = ["时间", "昵称", "用户ID (Display/Short/Long)", "粉丝团等级", "财富等级", "礼物名字", "礼物数量", "礼物价值"]
                    row = [
                        datetime.now().strftime("%Y-%m-%d %H:%M:%S"),
                        log_user_name,
                        key[0],
                        log_pay_grade,
                        log_fans_club,
                        gift_name,
                        total_cnt,
                        total_value
                    ]
                    self.log_message(f"gift_log", headers, row)

            # Update or create buffer (protected by lock)
            with self._lock_buffer:
                if key in self.gift_combo_buffer:
                    
                    # Get the maximum count
                    new_max_count = max(self.gift_combo_buffer[key]["count"], gift_cnt_current_message)
                    
                    # 1. Update count to the maximum value (Max Count Rule)
                    self.gift_combo_buffer[key]["count"] = new_max_count
                    
                    # 2. RECALCULATE TOTAL VALUE: Value is MAX COUNT * VALUE PER ITEM
                    diamond_value_per_item = self.gift_combo_buffer[key]["diamond_value_per_item"]
                    self.gift_combo_buffer[key]["value"] = new_max_count * diamond_value_per_item
                    
                    # Cancel old timer and reset combo timer
                    self.gift_combo_buffer[key]["timer"].cancel()
                else:
                    # Initialize new combo
                    self.gift_combo_buffer[key] = {
                        "count": gift_cnt_current_message,
                        "value": gift_cnt_current_message * gift_diamond_value, # Initial value based on current count
                        "diamond_value_per_item": gift_diamond_value, # Store unit price
                        "timer": None,
                        "pay_grade": pay_grade, 
                        "fans_club": fans_club,
                        "user_name": user_name
                    }
                
                # Start/Reset Timer
                timer = threading.Timer(self.gift_combo_delay, log_final_gift)
                self.gift_combo_buffer[key]["timer"] = timer
                timer.start()

            # Update User Level Cache
            with self._lock_data:
                self.user_level_cache[user_key] = {
                    "pay_grade": pay_grade,
                    "fans_club": fans_club,
                    "nickname": user_name
                }


        except Exception as e:
            print(f"【礼物msg】解析失败: {e}")


    def _parseLikeMsg(self, payload):
        '''点赞消息'''
        message = LikeMessage().parse(payload)
        user_name = message.user.nick_name
        count = message.count
        print(f"【点赞msg】{user_name} 点了{count}个赞")
    
    def _parseMemberMsg(self, payload):
            """进入直播间消息"""
            try:
                message = MemberMessage().parse(payload)
                user_name = message.user.nick_name
                long_id = message.user.id # Use long_id for anonymous check
                
                # --- ID Extraction Logic (Display ID priority) ---
                display_id = getattr(message.user, 'display_id', None)
                short_id = getattr(message.user, 'short_id', None)
                
                # 1. Use display_id if available
                user_key = str(display_id) if display_id and str(display_id) != '' and str(display_id) != '0' else None
                
                # 2. Fallback to short_id
                if not user_key:
                    user_key = str(short_id) if short_id and str(short_id) != '0' else None
                
                # 3. Final fallback to the long User ID (guaranteed uniqueness)
                if not user_key:
                    user_key = str(long_id)
                
                # 添加未知性别
                gender_map = ["女", "男"]
                gender_index = message.user.gender
                gender = gender_map[gender_index] if gender_index in [0, 1] else "未知"

                # 提取等级信息
                pay_grade_level = getattr(getattr(message.user, 'pay_grade', None), 'level', 0)
                fans_club_data = getattr(message.user.fans_club, 'data', None)
                fans_club_level = getattr(fans_club_data, 'level', 0)
                
                pay_grade = str(pay_grade_level) if pay_grade_level > 0 else "无"
                fans_club = str(fans_club_level) if fans_club_level > 0 else "无"

                # --- GUI/Console Display Logic ---
                cfg = self.handler_config.get("WebcastMemberMessage", {})
                show_entry = cfg.get("show_entry", True) # Default to True if not specified

                if show_entry:
                    if long_id == 111111:
                        print(f"【进场msg】[{gender}]{user_name} 进入了直播间")
                    else:
                        print(f"【进场msg】[{user_key}][{gender}]{user_name} 进入了直播间")

                # --- CSV Logging Logic ---
                if cfg.get("log_to_csv", False):
                    headers = ["时间", "昵称", "用户ID (Display/Short/Long)", "性别", "财富等级", "粉丝团等级"]
                    row = [
                        datetime.now().strftime("%Y-%m-%d %H:%M:%S") if self.include_timestamp else "",
                        user_name,
                        user_key,
                        gender,
                        pay_grade,
                        fans_club
                    ]
                    self.log_message(f"enter_log", headers, row)

                return message
            except Exception as e:
                print(f"【进场msg】解析失败: {e}")
                return None
        
    def _parseSocialMsg(self, payload):
        '''关注消息'''
        message = SocialMessage().parse(payload)
        user_name = message.user.nick_name
        user_id = message.user.id
        print(f"【关注msg】[{user_id}]{user_name} 关注了主播")
    
    def _parseRoomUserSeqMsg(self, payload):
        """直播间统计"""
        message = RoomUserSeqMessage().parse(payload)
        current = message.total
        total_raw = message.total_pv_for_anchor
        total = parse_chinese_number(total_raw)

        now = datetime.now()
        timestamp = now.strftime("%Y-%m-%d %H:%M:%S")
        print(f"【统计msg】当前观看人数: {current}, 累计观看人数: {total}")

        cfg = self.handler_config.get("WebcastRoomUserSeqMessage", {})
        interval = cfg.get("log_interval_seconds", 10)
        log_to_csv = cfg.get("log_to_csv", False)

        if hasattr(self, "last_logged_time") and (now - self.last_logged_time).total_seconds() < interval:
            return
        self.last_logged_time = now

        if log_to_csv:
            headers = ["时间", "在线人数", "场观人数"]
            row = [
                timestamp if self.include_timestamp else "",  
                current,      
                total              
            ]
            self.log_message(f"viewer_log", headers, row)
            print("Logging msg")


    def _parseFansclubMsg(self, payload):
        '''粉丝团消息'''
        message = FansclubMessage().parse(payload)
        content = message.content
        print(f"【粉丝团msg】 {content}")
    
    def _parseEmojiChatMsg(self, payload):
        '''聊天表情包消息'''
        message = EmojiChatMessage().parse(payload)
        emoji_id = message.emoji_id
        user = message.user
        common = message.common
        default_content = message.default_content
        print(f"【聊天表情包id】 {emoji_id},user：{user},common:{common},default_content:{default_content}")
    
    def _parseRoomMsg(self, payload):
        message = RoomMessage().parse(payload)
        common = message.common
        room_id = common.room_id
        print(f"【直播间msg】直播间id:{room_id}")
    
    def _parseRoomStatsMsg(self, payload):
        message = RoomStatsMessage().parse(payload)
        display_long = message.display_long
        print(f"【直播间统计msg】{display_long}")
    
    def _parseRankMsg(self, payload):
        """直播间排行榜消息：使用缓存数据填充等级缺失信息。"""
        # Helper to extract levels
        def _extract_levels_from_message(user):
            pay_grade_level = getattr(getattr(user, 'pay_grade', None), 'level', 0)
            fans_club_data = getattr(getattr(user, 'fans_club', None), 'data', None)
            fans_club_level = getattr(fans_club_data, 'level', 0)
            
            pay_grade_str = str(pay_grade_level) if pay_grade_level > 0 else "无"
            fans_club_str = str(fans_club_level) if fans_club_level > 0 else "无"
            
            return pay_grade_str, fans_club_str

        try:
            message = RoomRankMessage().parse(payload)
            ranks_list = message.ranks_list

            print("【直播间排行榜msg】")
            for idx, rank in enumerate(ranks_list, start=1):
                user = getattr(rank, 'user', None)
                if not user:
                    print(f"  {idx}. 昵称: (用户对象缺失) | 无法获取详细信息")
                    continue
                
                user_id = str(getattr(user, 'id', 0))
                
                # --- ID Extraction Logic for Cache Lookup ---
                display_id = getattr(user, 'display_id', None)
                short_id = getattr(user, 'short_id', None)
                
                user_key = str(display_id) if display_id and str(display_id) != '' and str(display_id) != '0' else None
                if not user_key:
                    user_key = str(short_id) if short_id and str(short_id) != '0' else None
                if not user_key:
                     user_key = user_id
                
                
                # 1. 尝试从排行榜消息本身获取等级 (Primary source)
                pay_grade, fans_club = _extract_levels_from_message(user)
                
                # 2. 如果等级缺失，从缓存中查找 (Secondary source)
                cached_data = self.user_level_cache.get(user_key)
                if cached_data:
                    if pay_grade == '无' and cached_data.get("pay_grade"):
                        pay_grade = cached_data["pay_grade"]
                    if fans_club == '无' and cached_data.get("fans_club"):
                        fans_club = cached_data["fans_club"]
                            
                # 昵称：使用缓存中的昵称
                nickname = getattr(user, 'nick_name', '')
                if not nickname:
                    cached_name = self.user_level_cache.get(user_key, {}).get("nickname")
                    if cached_name:
                        nickname = cached_name
                    elif user_key != '111111':
                        nickname = f'（无名/{user_key}）'
                    else:
                        nickname = '（匿名用户）'

                # 累计钻石 (从运行时内存获取)
                diamond_total = self.user_diamond_totals.get(user_key, {}).get("diamonds", 0)

                print(f"  {idx}. 昵称: {nickname} | 财富等级: {pay_grade} | 粉丝团等级: {fans_club} | 累计钻石: {diamond_total}")

        except Exception as e:
            print(f"【排行榜msg】解析失败: {e}")

            
    def _parseControlMsg(self, payload):
        """直播间状态消息"""
        message = ControlMessage().parse(payload)

        print(f"【控制msg】状态码: {message.status}")

        if message.status == 2:  # 直播结束
            print("【控制msg】直播间已结束，准备重连...")

            # Check running flag to allow graceful termination
            if not self._running:
                print("【控制msg】程序已通过外部调用停止。")
                return

            while self._running: # Check running flag here
                room_status = self.get_room_status()
                if room_status == 0:
                    print("【√】检测到直播重新开始，尝试连接 WebSocket...")
                    time.sleep(5)
                    self._connectWebSocket()
                    break
                else:
                    print("【...】直播仍未开始，30秒后重试")
                    if not self._running: # Double check if stop was called during sleep
                        break
                    time.sleep(30)

    def _parseRoomStreamAdaptationMsg(self, payload):
        message = RoomStreamAdaptationMessage().parse(payload)
        adaptationType = message.adaptation_type
        print(f'直播间adaptation: {adaptationType}')

    def _monitor_activity(self):
        """Monitor thread to check for silence (excluding heartbeats)."""
        print("【Watchdog】Activity monitor started.")
        while self._running:
            # Check if WebSocket exists and is connected
            if hasattr(self, 'ws') and getattr(self.ws, 'sock', None) and self.ws.sock.connected:
                elapsed = time.time() - self.last_message_time
                if elapsed > self.inactivity_timeout_seconds:
                    print(f"【Watchdog】No data for {int(elapsed)}s. Restarting connection...")
                    try:
                        self.ws.close()  # Triggers _wsOnClose and automatic reconnection
                    except:
                        pass
                    break # Exit monitor for the old connection
            else:
                break
            time.sleep(2) # Check every 2 seconds
