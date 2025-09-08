#!/usr/bin/python
# coding:utf-8

# @FileName:    main.py
# @Time:        2024/1/2 22:27
# @Author:      bubu
# @Project:     douyinLiveWebFetcher

from liveMan import DouyinLiveWebFetcher

if __name__ == '__main__':
    live_id = '91046108832'
    room = DouyinLiveWebFetcher(live_id)
    room.get_room_status()
    room.start()
