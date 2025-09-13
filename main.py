#!/usr/bin/python
# coding:utf-8

# @FileName:    main.py
# @Time:        2024/1/2 22:27
# @Author:      bubu
# @Project:     douyinLiveWebFetcher

from liveMan import DouyinLiveWebFetcher

if __name__ == '__main__':
    live_id = '933711428606'
    room = DouyinLiveWebFetcher(live_id)
    room.get_room_status() # 获取房间状态,失败时重试即可，abogus不是100%有效
    room.start()
