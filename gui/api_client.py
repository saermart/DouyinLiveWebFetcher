"""
抖音HTTP API客户端 - 处理所有RESTful请求
基于Chrome DevTools MCP获取的真实接口
"""

import requests
import logging
import random
import string
import time
from typing import Optional, Dict, List, Tuple, Any

logger = logging.getLogger(__name__)


class APICallError(Exception): pass
class AuthenticationError(APICallError): pass
class RateLimitError(APICallError): pass
class NetworkError(APICallError): pass


class DouyinAPIClient:
    BASE_URL = "https://live.douyin.com"
    
    def __init__(self, cookies: Optional[Dict[str, str]] = None):
        self.session = requests.Session()
        self.headers = {
            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36",
            "Referer": "https://live.douyin.com/",
            "Origin": "https://live.douyin.com",
            "Accept": "application/json, text/plain, */*",
            "Accept-Language": "zh-CN,zh;q=0.9",
            "Accept-Encoding": "gzip, deflate",
        }
        if cookies: self.set_cookies(cookies)
    
    def set_cookies(self, cookies: Dict[str, str]) -> None:
        for name in list(self.session.cookies.keys()):
            if name in cookies: self.session.cookies.clear(name)
        for name, value in cookies.items():
            self.session.cookies.set(name, value, domain='.douyin.com', path='/')
    
    def is_logged_in(self) -> bool:
        sessionid = self.session.cookies.get("sessionid")
        return bool(sessionid and len(sessionid) > 10)