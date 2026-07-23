#!/usr/bin/python
# coding:utf-8

# @FileName:    main.py
# @Time:        2024/1/2 22:27
# @Author:      bubu
# @Project:     douyinLiveWebFetcher

import sys
import re

sys.stdout.reconfigure(encoding="utf-8", line_buffering=True)
sys.stderr.reconfigure(encoding="utf-8", line_buffering=True)

from liveMan import DouyinLiveWebFetcher

if __name__ == '__main__':
    if len(sys.argv) != 2:
        print(f"参数个数不正确。")
        print(f"Usage: {sys.argv[0]} LIVE_ID")
        sys.exit(1)

    live_id = sys.argv[1]
    if not re.match(r'^[0-9]+$', live_id):
        print(f"Usage: {sys.argv[0]} LIVE_ID")
        print(f"LIVE_ID 应当是纯数字")
        sys.exit(1)

    fetcher = DouyinLiveWebFetcher(live_id)
    fetcher.run_forever(poll_interval=10)
