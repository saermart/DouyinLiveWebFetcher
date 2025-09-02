#!/usr/bin/python
# coding:utf-8

# @FileName:    main.py
# @Time:        2024/1/2 22:27
# @Author:      bubu
# @Project:     douyinLiveWebFetcher

from liveMan import DouyinLiveWebFetcher

if __name__ == '__main__':
<<<<<<< HEAD
    live_id = '294530521082'
=======
    live_id = '91046108832'
>>>>>>> 44655ce5a26e3eb11508cb7ba645b2967dee888b
    room = DouyinLiveWebFetcher(live_id)
    room.get_room_status()
    room.start()
