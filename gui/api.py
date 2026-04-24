#!/usr/bin/env python
# coding:utf-8
"""Python API bridge — exposed to the JavaScript frontend via pywebview."""

import json
import threading
import logging
from datetime import datetime

from liveMan import DouyinLiveWebFetcher
from gui.config import ConfigManager
from gui.interaction import InteractionModule

logger = logging.getLogger(__name__)


class API:
    MESSAGE_TYPE_MAP = {
        "chat": "chat",
        "gift": "gift",
        "like": "like",
        "member": "member",
        "social": "social",
        "fansclub": "fansclub",
        "stats": "stats",
        "room_stats": "room_stats",
        "rank": "rank",
        "control": "control",
        "room": "room",
        "emoji": "emoji",
    }

    def __init__(self, window, config_manager=None):
        self.window = window
        self.config = config_manager or ConfigManager()
        self.fetcher = None
        self._monitor_thread = None
        self._is_running = False
        self._message_count = 0
        self._js_callback = None
        self._messages = []
        self._current_live_id = ""
        self._monitor_start_time = ""
        self._monitor_stop_time = ""
        self._session = None
    
    def set_js_callback(self, callback):
        self._js_callback = callback
    
    def get_export_content(self):
        if not self._messages:
            return ""
        lines = []
        lines.append("=" * 60)
        lines.append("抖音直播间监控数据导出")
        lines.append("=" * 60)
        lines.append(f"")
        lines.append(f"📺 直播间ID: {self._current_live_id}")
        lines.append(f"⏰ 开始时间: {self._monitor_start_time}")
        lines.append(f"⏰ 停止时间: {self._monitor_stop_time or '进行中...'}")
        lines.append(f"📊 消息总数: {len(self._messages)}")
        lines.append(f"")
        stats = self._calculate_statistics()
        lines.append("-" * 60)
        lines.append("📈 实时统计摘要")
        lines.append("-" * 60)
        lines.append(f"💬 总弹幕数:   {stats['total_chats']:,} 条")
        lines.append(f"🎁 总礼物数:   {stats['total_gifts']:,} 个 (实际数量)")
        lines.append(f"👍 总点赞数:   {stats['total_likes']:,} 个 (实际点赞)")
        lines.append(f"🚪 新进观众:   {stats['total_members']:,} 人")
        lines.append(f"❤️ 关注主播:   {stats['total_socials']:,} 人")
        lines.append(f"😀 表情消息:   {stats['total_emojis']:,} 条")
        lines.append(f"-" * 60)
        lines.append(f"")
        lines.append("📋 消息明细:")
        lines.append("=" * 60)
        lines.append("")
        for msg in self._messages:
            timestamp = msg.get("_timestamp", "")
            text = msg.get("text", "")
            if timestamp and text:
                lines.append(f"[{timestamp}] {text}")
        lines.append("")
        lines.append("=" * 60)
        lines.append(f"导出时间: {datetime.now().strftime('%Y-%m-%d %H:%M:%S')}")
        lines.append(f"生成工具: DouyinLiveWebFetcher-Reborn")
        lines.append("=" * 60)
        return "\n".join(lines)

    def _calculate_statistics(self):
        stats = {'total_chats': 0, 'total_gifts': 0, 'total_likes': 0, 'total_members': 0, 'total_socials': 0, 'total_emojis': 0, 'total_stats': 0, 'total_room_stats': 0, 'total_control': 0, 'total_fansclub': 0, 'total_rank': 0}
        for msg in self._messages:
            msg_type = msg.get('type', '')
            if msg_type == 'chat': stats['total_chats'] += 1
            elif msg_type == 'gift':
                gift_count = msg.get('gift_count', 1) or 1
                stats['total_gifts'] += int(gift_count) if isinstance(gift_count, (int, float)) else 1
            elif msg_type == 'like':
                like_count = msg.get('count', 1) or 1
                stats['total_likes'] += int(like_count) if isinstance(like_count, (int, float)) else 1
            elif msg_type == 'member': stats['total_members'] += 1
            elif msg_type == 'social': stats['total_socials'] += 1
            elif msg_type == 'emoji': stats['total_emojis'] += 1
            elif msg_type == 'stats': stats['total_stats'] += 1
            elif msg_type == 'room_stats': stats['total_room_stats'] += 1
            elif msg_type == 'control': stats['total_control'] += 1
            elif msg_type == 'fansclub': stats['total_fansclub'] += 1
            elif msg_type == 'rank': stats['total_rank'] += 1
        return stats