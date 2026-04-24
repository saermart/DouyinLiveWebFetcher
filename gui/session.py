#!/usr/bin/env python
# coding:utf-8
"""会话管理器 - 管理抖音账号登录状态和认证数据."""

import logging
from gui.config import ConfigManager

logger = logging.getLogger(__name__)


class SessionManager:
    def __init__(self, config_manager: ConfigManager):
        self._config = config_manager
        self._cookies: dict = {}
        self._user_info: dict = {}
        self._is_logged_in = False
        self._login_callback = None
        self._logout_callback = None
        self._load_from_config()

    def _load_from_config(self):
        result = self._config.load_session()
        if result:
            self._cookies, self._user_info = result
            self._is_logged_in = bool(self._cookies)
            logger.info(f"Loaded session for user: {self._user_info.get('nickname', 'unknown')}")
        else:
            logger.info("No saved session found")

    def set_callbacks(self, login_callback=None, logout_callback=None):
        self._login_callback = login_callback
        self._logout_callback = logout_callback

    def login(self, cookies: dict, user_info: dict):
        self._cookies = cookies
        self._user_info = user_info
        self._is_logged_in = True
        result = self._config.save_session(cookies, user_info)
        logger.info(f"User logged in: {user_info.get('nickname', 'unknown')}, save_session result: {result}")
        if self._login_callback: self._login_callback(user_info)

    def logout(self):
        self._cookies = {}
        self._user_info = {}
        self._is_logged_in = False
        self._config.clear_session()
        logger.info("User logged out")
        if self._logout_callback: self._logout_callback()

    def is_logged_in(self) -> bool: return self._is_logged_in

    def get_cookies(self) -> dict: return dict(self._cookies)

    def get_cookies_str(self) -> str: return "; ".join(f"{k}={v}" for k, v in self._cookies.items())

    def get_user_info(self) -> dict: return dict(self._user_info)

    def get_user_nickname(self) -> str: return self._user_info.get("nickname", "未登录")

    def get_user_avatar(self) -> str: return self._user_info.get("avatar", "")

    def get_user_uid(self) -> str: return self._user_info.get("uid", "")