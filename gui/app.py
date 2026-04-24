#!/usr/bin/env python
# coding:utf-8
"""抖音直播间弹幕桌面应用 — PyQt6 GUI entry point."""

import os
import sys
import json
import logging
import threading

def get_resource_path(relative_path):
    base_path = getattr(sys, '_MEIPASS', os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
    return os.path.join(base_path, relative_path)

project_root = get_resource_path('.')
if project_root not in sys.path:
    sys.path.insert(0, project_root)

from PyQt6.QtWidgets import QApplication, QFileDialog
from PyQt6.QtWebEngineWidgets import QWebEngineView
from PyQt6.QtWebChannel import QWebChannel
from PyQt6.QtCore import QUrl, pyqtSlot, QObject, pyqtSignal, Qt
from PyQt6.QtWebEngineCore import QWebEnginePage, QWebEngineProfile, QWebEngineSettings

from http.server import HTTPServer, SimpleHTTPRequestHandler
import socketserver

from gui.api import API
from gui.config import ConfigManager
from gui.session import SessionManager
from gui.login_window import EmbeddedLoginDialog
from gui.api_client import DouyinAPIClient

logging.basicConfig(level=logging.INFO, format="%(asctime)s [%(levelname)s] %(name)s: %(message)s")
logger = logging.getLogger(__name__)


class JsBridge(QObject):
    js_command = pyqtSignal(str)
    
    def __init__(self, view, parent=None):
        super().__init__(parent)
        self._view = view
        self.js_command.connect(self._execute_js, Qt.ConnectionType.QueuedConnection)
    
    def push(self, js_code):
        self.js_command.emit(js_code)
    
    def _execute_js(self, js_code):
        try:
            self._view.page().runJavaScript(js_code)
        except Exception as e:
            logger.error(f"JS execution error: {e}")


class Bridge(QObject):
    def __init__(self, api_instance, parent=None):
        super().__init__(parent)
        self.api = api_instance
        self._api_client = DouyinAPIClient()
        self._user_info_cache = None
        self._gift_list_cache = None

    @pyqtSlot(result=str)
    def get_config(self): return self.api.get_config()

    @pyqtSlot(str, result=str)
    def save_config(self, config_dict): return self.api.save_config(config_dict)

    @pyqtSlot(result=str)
    def get_history(self): return self.api.get_history()

    @pyqtSlot(result=str)
    def get_status(self): return self.api.get_status()

    @pyqtSlot(str, result=str)
    def start_monitor(self, live_id): return self.api.start_monitor(live_id)

    @pyqtSlot(result=str)
    def stop_monitor(self): return self.api.stop_monitor()

    @pyqtSlot(str, result=str)
    def set_message_types(self, types_dict): return self.api.set_message_types(types_dict)

    @pyqtSlot(result=str)
    def get_export_content(self): return self.api.get_export_content()

    @pyqtSlot(result=str)
    def get_export_filename(self): return self.api.get_export_filename()

    @pyqtSlot(result=str)
    def export_messages(self):
        content = self.api.get_export_content()
        if not content:
            return json.dumps({"success": False, "error": "暂无消息可导出"}, ensure_ascii=False)
        filename = self.api.get_export_filename()
        try:
            file_path, _ = QFileDialog.getSaveFileName(None, "导出消息", filename, "文本文件 (*.txt);;所有文件 (*)")
            if file_path:
                with open(file_path, "w", encoding="utf-8") as f: f.write(content)
                return json.dumps({"success": True, "path": file_path}, ensure_ascii=False)
            else:
                return json.dumps({"success": False, "error": "已取消"}, ensure_ascii=False)
        except Exception as e:
            logger.error(f"Error exporting messages: {e}")
            return json.dumps({"success": False, "error": str(e)}, ensure_ascii=False)

    @pyqtSlot(result=str)
    def get_login_status(self): return self.api.get_login_status()

    login_requested = pyqtSignal()

    @pyqtSlot(result=str)
    def do_login(self):
        logger.info("[DEBUG] do_login() called - emitting login_requested signal")
        self.login_requested.emit()
        logger.info("[DEBUG] login_requested signal emitted")
        return json.dumps({"success": True, "message": "登录窗口已打开"}, ensure_ascii=False)

    @pyqtSlot(result=str)
    def do_logout(self):
        if self.api._session: self.api._session.logout()
        self._user_info_cache = None
        self._gift_list_cache = None
        return json.dumps({"success": True}, ensure_ascii=False)

    @pyqtSlot(str, str, result=str)
    def send_comment(self, room_id, text):
        try:
            success, message = self.api.send_comment(room_id, text)
            return json.dumps({"success": success, "message": message}, ensure_ascii=False)
        except Exception as e:
            logger.error(f"发送弹幕失败: {e}")
            return json.dumps({"success": False, "message": f"发送失败: {str(e)}"}, ensure_ascii=False)

    @pyqtSlot(str, result=str)
    def send_like(self, room_id):
        try:
            success, message = self.api.send_like(room_id)
            return json.dumps({"success": success, "message": message}, ensure_ascii=False)
        except Exception as e:
            logger.error(f"点赞失败: {e}")
            return json.dumps({"success": False, "message": f"点赞失败: {str(e)}"}, ensure_ascii=False)