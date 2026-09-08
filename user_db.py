import hashlib
import os
from typing import Any, Callable, List

from rocksdict import Rdict, Options

from google.protobuf.message import Message
from google.protobuf.descriptor import FieldDescriptor
from google.protobuf.json_format import ParseDict
from protobuf.douyin.bizIm.webcast.data_pb2 import User
import protobuf.douyin.bizIm.webcast.im_pb2 as webcast_im
import protobuf.douyin.bizIm.webcast.data_pb2 as webcast_data

'''
ActivityEmojiGroupsMessage
AssetEffectUtilMessage
AudioChatMessage
BattleEndPunishMessage
BattlePowerContainerMessage
BattleRankSeasonMessage
BattleStatusMessage
BattleTeamTaskMessage
BindingGiftMessage
ChatLikeMessage
ChatMessage
CommonDotMessage
ControlMessage
DecorationModifyMethod
DecorationUpdateMessage
EasterEggDataMessage
EmojiChatMessage
ExhibitionChatMessage
FansclubMessage
GiftMessage
GiftPlayEventMessage
GiftSortMessage
HotChatMessage
InRoomBannerMessage
InteractEffectMessage
LightGiftMessage
LikeMessage
LinkerContributeMessage
LinkMessage
LinkMicArmiesMethod
LinkMicBattleFinishMethod
LinkMicBattleMethod
LinkMicMethod
LinkmicPlayModeUpdateScoreMessage
LinkSettingNotifyMessage
LotteryDrawResultEventMessage
LotteryEventNewMessage
LowPcuGuideMessage
LuckyBoxEndMessage
LuckyBoxMessage
LuckyBoxRewardMessage
LuckyBoxTempStatusMessage
MemberMessage
NotifyEffectMessage
PrivilegeScreenChatMessage
PrizeNoticeMessage
ProfitGameStatusMessage
ProfitInteractionScoreMessage
RanklistHourEntranceMessage
ResidentGuestMessage
RoomCommentTopicMessage
RoomDataSyncMessage
RoomMessage
RoomNotifyMessage
RoomRankMessage
RoomStatsMessage
RoomStreamAdaptationMessage
RoomUserSeqMessage
ScreenChatMessage
SocialMessage
ToastMessage
'''


def clearRepeatedFieldsForMerge(m: Message, m_: Message):
    for field, value in m_.ListFields():
        if field.label == FieldDescriptor.LABEL_REPEATED:  # both map<> and repeated
            m.ClearField(field.name)
        elif field.message_type is not None:
            clearRepeatedFieldsForMerge(getattr(m, field.name), value)


KNOWN_USER_TYPES = [
    User,
    webcast_data.BattleUserInfo.BaseUserInfo,
    webcast_im.LinkMicArmies.UserArmies.UserArmy,
    webcast_data.BattleArmy.RankUser,
]


def userFromKnownObjects(o: Message) -> User | None:
    if isinstance(o, User):
        return o
    elif isinstance(o, webcast_data.BattleUserInfo.BaseUserInfo):
        u = User()
        u.id = o.user_id
        u.id_str = o.user_id_str
        u.nickname = o.nick_name
        u.gender = o.gender
        u.sec_uid = o.sec_uid
        u.avatar_thumb.CopyFrom(o.avatar_thumb)
        u.user_open_id = o.open_id
        return u
    elif isinstance(o, webcast_im.LinkMicArmies.UserArmies.UserArmy):
        u = User()
        u.id = o.user_id
        u.nickname = o.nickname
        u.avatar_thumb.CopyFrom(o.avatar_thumb)
        u.user_open_id = o.open_id
        return u
    elif isinstance(o, webcast_data.BattleArmy.RankUser):
        u = User()
        u.id = o.user_id
        u.id_str = o.user_id_str
        u.nickname = o.nickname
        u.webcast_uid = o.webcast_uid
        u.avatar_thumb.CopyFrom(o.avatar_thumb)
        u.user_open_id = o.open_id
        return u
    return None


def _getMessageField(m: Message, path: str, result: List[Any]):
    if m is None or path is None:
        return
    while (m is not None) and len(path) > 0:
        dot = path.find('.')
        dot = len(path) if dot == -1 else dot
        field, path = path[:dot], path[dot + 1:]
        if field.endswith('[]'):
            for e in getattr(m, field[:-2]):
                _getMessageField(e, path, result)
            return
        elif field.endswith('{}'):
            for e in getattr(m, field[:-2]).values():
                _getMessageField(e, path, result)
            return
        else:
            if not m.HasField(field):  # field is not set
                return
            m = getattr(m, field)
    result.append(m)


def getMessageField(m: Message, path: str) -> List[Any]:
    result = []
    _getMessageField(m, path, result)
    return result


def visitObjectInMessage(m: Message, Ts: List[type], func: Callable) -> None:
    """
    Ts: object types
    """
    if type(m) in Ts:
        func(m)
        return
    if not isinstance(m, Message):
        return
    for field, value in m.ListFields():
        if field.label == FieldDescriptor.LABEL_REPEATED:
            if (field.message_type is not None) and field.message_type.GetOptions().map_entry:  # map<> field
                for k, v in value.items():
                    visitObjectInMessage(k, Ts, func)
                    visitObjectInMessage(v, Ts, func)
            else:  # repeated field
                for e in value:
                    visitObjectInMessage(e, Ts, func)
        else:
            visitObjectInMessage(value, Ts, func)


def getObjectFromMessageRecursive(m: Message, Ts: List[type]) -> List[Any]:
    result = []
    visitObjectInMessage(m, Ts, lambda o: result.append(o))
    return result


class UserDB():

    def __init__(self, db_path: str = './user'):
        os.makedirs(db_path, exist_ok=True)
        options = Options(raw_mode=False)
        options.create_if_missing(True)
        # options.load_latest(db_path)
        self.db = Rdict(db_path, options=options)
        self._count = len([*self.db.keys()])

    def __del__(self):
        if hasattr(self, 'db'):
            self.db.close()

    def flush(self):
        self.db.flush()

    def get(self, id: int) -> User | None:
        b = self.db.get(id)
        if b:
            u = User()
            u.ParseFromString(b)
            return u

    def __getitem__(self, key: int) -> User | None:
        return self.get(key)

    def count(self) -> int:
        return self._count

    # @staticmethod
    # def usefulId(u :User):
    #     id = u.id or int(u.id_str)
    #     if id == 111111:
    #         # 8 bytes = hash_of_desensitized_nickname(4) | pay_grade_level(2) | avg_color_of_avatar_thumb(2)
    #         color = int(u.avatar_thumb.avg_color[1:], 16) & 0b11110000_11110000_11110000_11110000
    #         b = hashlib.sha1(u.nickname).digest()[:4]
    #         b += int.to_bytes(u.pay_grade.level, 2, 'little')
    #         b += hashlib.sha1(int.to_bytes(color, 4, 'little')).digest()[:2]
    #         id = int.from_bytes(b, 'little')
    #     return id

    def update(self, u_: User):
        u_ = userFromKnownObjects(u_)
        if u_ is None:
            return
        id = u_.id or int(u_.id_str)
        u_bytes = self.db.get(id)
        if u_bytes:
            u = User()
            u.ParseFromString(u_bytes)
            clearRepeatedFieldsForMerge(u, u_)
            u.MergeFrom(u_)
            self.db[id] = u.SerializeToString()
        else:
            self._count += 1
            self.db[id] = u_.SerializeToString()

    def updateMany(self, users: List['User']):
        for u in users:
            self.update(u)

    def updateFromFields(self, m: Message, paths: List[str]):
        for path in paths:
            self.updateFromField(m, path)

    def updateFromField(self, m: Message, path: str):
        self.updateMany(getMessageField(m, path))

    def updateFromDict(self, u_: dict):
        u = ParseDict(u_, User(), ignore_unknown_fields=True)
        self.update(u)

    def updateFromMessageRecursive(self, m: Message):
        visitObjectInMessage(m, KNOWN_USER_TYPES, self.update)


def dump_db(db_path: str):
    user = UserDB(db_path)
    for i, u in user.db.items():
        u = user[i]
        print(f'{i:20} ({u.pay_grade.level:2},{u.fans_club.data.level:2}) {u.nickname}')


if __name__ == '__main__':
    import shutil
    from google.protobuf.json_format import Parse
    import protobuf.douyin.bizIm.webcast.im_pb2 as webcast_im

    shutil.rmtree('./user_db_test', ignore_errors=True)

    user = UserDB('./user_db_test')

    s = r'''{ "common": { "method": "WebcastNotifyEffectMessage" }, "text_v2": { "display_items": [ { "display_item_type": 2, "text_item": { "text": { "key": "privilege_grade_level_up", "default_pattern": "{0:user} 升级至Lv.{1:string}", "default_format": { "color": "#ffffff", "weight": 400, "use_remote_clor": true }, "pieces": [ { "type": 11, "format": { "color": "#ffffff", "weight": 400, "use_remote_clor": true }, "user_value": { "user": { "id": "78978777887979", "nickname": "测试用户" } } }, { "type": 1, "format": { "color": "#ffffff", "weight": 400, "use_remote_clor": true }, "string_value": "31" } ] } } } ] }
    }'''

    m = Parse(s, webcast_im.NotifyEffectMessage())
    user.updateFromField(m, 'text_v2.display_items[].text_item.text.pieces[].user_value.user')

    print(
        [user[k].nickname for k in user.db.keys()]
    )

    print(getObjectFromMessageRecursive(m, [str]))

    s2 = r'''{"common": {"method": "WebcastChatMessage", "msg_id": "7683566871476786218", "room_id": "7683537420911479567", "is_show_msg": true, "priority_score": "31052", "app_id": "1128"}, "user": {"id": "86119125729", "short_id": "201801470", "nickname": "是个废人.", "gender": 1, "level": 1, "avatar_thumb": {"url_list": ["https://p11.douyinpic.com/aweme/100x100/aweme-avatar/tos-cn-i-0813c001_osgnl1AXHB3AACoDe6jAsDAADNNeQ7AQqgb89I.jpeg?from=3067671334"]}, "badge_image_list": [{"url_list": ["https://p11-webcast.douyinpic.com/img/webcast/new_user_grade_level_v1_18.png~tplv-obj.image"], "height": "16", "width": "32", "image_type": 1, "content": {"level": "18", "alternative_text": "荣誉等级18级勋章"}}, {"url_list": ["https://p11-webcast.douyinpic.com/img/webcast/fansclub_level_v6_10.png~tplv-obj.image"], "image_type": 7, "content": {"font_color": "#FFFFFF", "level": "10", "alternative_text": "粉丝团等级10级勋章"}}], "follow_info": {"following_count": "710", "follower_count": "119", "follow_status": "1", "follower_count_str": "0", "following_count_str": "0"}, "pay_grade": {"level": "18", "new_im_icon_with_level": {"url_list": ["https://p11-webcast.douyinpic.com/img/webcast/new_user_grade_level_v1_18.png~tplv-obj.image"], "height": "16", "width": "32", "image_type": 1}, "new_live_icon": {"url_list": ["https://p3-webcast.douyinpic.com/img/webcast/aweme_pay_grade_2x_15_19.png~tplv-obj.image"], "height": "12", "width": "12", "image_type": 1}}, "fans_club": {"data": {"level": 10, "user_fans_club_status": 1, "badge": {"icons": {"2": {"url_list": ["https://p11-webcast.douyinpic.com/img/webcast/fansclub_level_v6_10.png~tplv-obj.image", "https://p3-webcast.douyinpic.com/img/webcast/fansclub_level_v6_10.png~tplv-obj.image"], "uri": "webcast/fansclub_level_v6_10.png"}, "4": {"url_list": ["https://p3-webcast.douyinpic.com/img/webcast/fansclub_new_advanced_badge_10_xmp.png~tplv-obj.image", "https://p11-webcast.douyinpic.com/img/webcast/fansclub_new_advanced_badge_10_xmp.png~tplv-obj.image"], "uri": "webcast/fansclub_new_advanced_badge_10_xmp.png"}}}, "anchor_id": "64535752502"}}, "user_attr": {}, "display_id": "201801470", "sec_uid": "MS4wLjABAAAAJztSkEiR_uCsoTe8VgYwjsdFzTVSdRzAVhb4S9fovXA", "authorization_info": 3, "badge_image_list_v2": [{"url_list": ["https://p11-webcast.douyinpic.com/img/webcast/new_user_grade_level_v1_18.png~tplv-obj.image"], "height": "16", "width": "32", "image_type": 1, "content": {"level": "18", "alternative_text": "荣誉等级18级勋章"}}, {"url_list": ["https://p11-webcast.douyinpic.com/img/webcast/fansclub_level_v6_10.png~tplv-obj.image"], "image_type": 7, "content": {"font_color": "#FFFFFF", "level": "10", "alternative_text": "粉丝团等级10级勋章"}}, {"url_list": ["https://p3-webcast.douyinpic.com/img/webcast/fansclub_new_advanced_badge_10_xmp.png~tplv-obj.image"], "image_type": 51, "content": {"font_color": "#FFFFFF", "level": "10", "alternative_text": "粉丝团等级10级勋章"}}], "mystery_man": 1, "desensitized_nickname": "是个废人.", "webcast_uid": "MS4wLjOwEoK8rBfGP77-QCtuUe83DmNVgfGdyiGH-plSZuc74ykOs1tPFOgu5VaGuoyptNE", "public_area_badge_info": {"badge_info_map": {"12": {"url_list": ["https://p3-webcast.douyinpic.com/img/webcast/fansclub_new_advanced_badge_10_xmp.png~tplv-obj.image", "https://p11-webcast.douyinpic.com/img/webcast/fansclub_new_advanced_badge_10_xmp.png~tplv-obj.image"], "uri": "webcast/fansclub_new_advanced_badge_10_xmp.png", "image_type": 51, "content": {"font_color": "#FFFFFF", "level": "10", "alternative_text": "粉丝团等级10级勋章"}}, "6": {"url_list": ["https://p11-webcast.douyinpic.com/img/webcast/new_user_grade_level_v1_18.png~tplv-obj.image", "https://p3-webcast.douyinpic.com/img/webcast/new_user_grade_level_v1_18.png~tplv-obj.image"], "uri": "webcast/new_user_grade_level_v1_18.png", "height": "16", "width": "32", "image_type": 1, "content": {"level": "18", "alternative_text": "荣誉等级18级勋章"}}}, "badge_list": ["6", "12"]}}, "content": "@雪鸮(xiāo)🦉沐光海德薇    雪鸮哥，这个真值得叫一声妈妈", "public_area_common": {"user_label": {"url_list": ["https://p11-webcast.douyinpic.com/img/webcast/userlabel_regular_chat.png~tplv-obj.image"], "avg_color": "#FAE6DC"}, "user_send_gift_cnt_in_room": "1", "individual_priority": "50", "im_action": 1, "tracking_params": {"is_group_member_support_msg_list": "0"}, "mention_info": {"mention_user_ids": ["96135883868"], "show_time": "5"}, "show_in_danmaku": true}, "event_time": "1788969826", "individual_chat_priority": 80, "rtf_content_v2": {"key": "chat_rtf_content", "default_pattern": "{0:user}{1:string}", "default_format": {"color": "#ffffffff", "weight": 400}, "pieces": [{"type": 11, "format": {"color": "#8CE7FF", "weight": 400, "use_remote_clor": true}, "user_value": {"user": {"id": "96135883868", "short_id": "630299544", "nickname": "雪鸮(xiāo)🦉沐光海德薇", "gender": 1, "avatar_thumb": {"url_list": ["https://p11.douyinpic.com/aweme/100x100/aweme-avatar/tos-cn-i-0813c000-ce_ocfJIHKnTAAQmH2SAI4eeARAvTrG3LNf7cY33D.jpeg?from=3067671334", "https://p3.douyinpic.com/aweme/100x100/aweme-avatar/tos-cn-i-0813c000-ce_ocfJIHKnTAAQmH2SAI4eeARAvTrG3LNf7cY33D.jpeg?from=3067671334", "https://p26.douyinpic.com/aweme/100x100/aweme-avatar/tos-cn-i-0813c000-ce_ocfJIHKnTAAQmH2SAI4eeARAvTrG3LNf7cY33D.jpeg?from=3067671334"], "uri": "100x100/aweme-avatar/tos-cn-i-0813c000-ce_ocfJIHKnTAAQmH2SAI4eeARAvTrG3LNf7cY33D"}, "follow_info": {"following_count": "275", "follower_count": "1585", "follow_status": "2", "follower_count_str": "0", "following_count_str": "0"}, "user_attr": {}, "display_id": "630299544", "sec_uid": "MS4wLjABAAAA-xMWlZaK8LQOcUNjN5AA4oWBlQBAimXC3mXWDGX3_x0", "authorization_info": 3, "mystery_man": 1, "desensitized_nickname": "雪鸮(xiāo)🦉沐光海德薇", "webcast_uid": "MS4wLjOfWBatsvZizPGfcKEjQqtEYA1UXY-ERr0WDMT0cUxfQ8CtPv44USnSeIMe6FYWzQk"}, "self_show_real_name": true, "left_additional_content": "@"}}, {"type": 1, "format": {"color": "#FFFFFF", "weight": 400, "use_remote_clor": true}, "string_value": "    雪鸮哥，这个真值得叫一声妈妈"}]}}
    '''
    m2 = Parse(s2, webcast_im.ChatMessage())
    print(getObjectFromMessageRecursive(m2, [User]))
