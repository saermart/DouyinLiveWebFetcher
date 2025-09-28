#!/usr/bin/python
# coding:utf-8

# @FileName:    main.py
# @Time:        2024/1/2 22:27
# @Author:      bubu
# @Project:     douyinLiveWebFetcher

import signal
from liveMan import DouyinLiveWebFetcher

room: DouyinLiveWebFetcher


def signal_handler(sig, frame):
    print("Received signal:", sig)
    if room:
        room.stop()


if __name__ == '__main__':
    signal.signal(signal.SIGINT, signal_handler)
    signal.signal(signal.SIGTERM, signal_handler)

    try:
        live_id = '510200350291'
        room = DouyinLiveWebFetcher(live_id)
        # room.get_room_status() # 失效
        room.start()
    except Exception as e:
        print(e)
