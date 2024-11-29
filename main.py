#!/usr/bin/python
# coding:utf-8

# @FileName:    main.py
# @Time:        2024/1/2 22:27
# @Author:      bubu
# @Project:     douyinLiveWebFetcher

import sys
import logging
import configparser
from liveMan import DouyinLiveWebFetcher

logging.basicConfig(level=logging.INFO)

# 读取配置文件
config = configparser.ConfigParser()
config.read('config.ini')

if __name__ == '__main__':
    if len(sys.argv) > 1:
        live_ids = sys.argv[1:]
    else:
        with open('config.ini', 'r') as f:
            live_ids = [line.strip() for line in f if line.strip()]

    for live_id in live_ids:
        logging.info(f"Starting DouyinLiveWebFetcher with live_id: {live_id}")
        try:
            DouyinLiveWebFetcher(live_id).start()
        except Exception as e:
            logging.error(f"Error occurred with live_id {live_id}: {e}")
