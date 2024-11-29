import sys
import logging
from multiprocessing import Process

from liveMan import DouyinLiveWebFetcher

logging.basicConfig(level=logging.INFO)

def start_fetcher(live_id):
    """启动抓取器的方法，接受直播间 ID"""
    logging.info(f"Starting DouyinLiveWebFetcher with live_id: {live_id}")
    try:
        DouyinLiveWebFetcher(live_id).start()
    except Exception as e:
        logging.error(f"Error occurred with live_id {live_id}: {e}")

if __name__ == '__main__':
    # 获取直播间 ID 列表
    if len(sys.argv) > 1:
        live_ids = sys.argv[1:]
    else:
        with open('config.ini', 'r') as f:
            live_ids = [line.strip() for line in f if line.strip()]

    # 创建进程列表
    processes = []

    for live_id in live_ids:
        # 为每个 live_id 创建一个新进程
        process = Process(target=start_fetcher, args=(live_id,))
        processes.append(process)
        process.start()  # 启动进程

    # 等待所有进程完成
    for process in processes:
        process.join()

    logging.info("All fetchers have finished.")
