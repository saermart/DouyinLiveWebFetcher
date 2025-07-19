import websockets
import asyncio
import ssl
import certifi
import subprocess
import time
import random
import enum


# 连接状态枚举
class ConnectionStatus(enum.Enum):
    CONNECTING = "CONNECTING"
    CONNECTED = "CONNECTED"
    DISCONNECTED = "DISCONNECTED"


# 配置参数
HEARTBEAT_INTERVAL = 20  # 心跳间隔（秒）
PING_TIMEOUT = 10  # ping超时时间（秒）
MAX_RECONNECT_DELAY = 5  # 最大重连延迟
MIN_RECONNECT_DELAY = 1  # 最小重连延迟
RECONNECT_FACTOR = 1.5  # 退避因子
MAX_RECONNECT_ATTEMPTS = 10  # 最大重连次数


# 创建新的 Popen 类
class NewSubprocessPopen(subprocess.Popen):
    def __init__(self, *args, **kwargs):
        super().__init__(encoding='UTF-8', *args, **kwargs)


subprocess.Popen = NewSubprocessPopen
import execjs

# 创建SSL上下文
ssl_context = ssl.create_default_context()
ssl_context.load_verify_locations(certifi.where())

# 缓存JS编译结果
with open('./ks_enc01.js', 'r', encoding='utf-8') as f:
    js_code = f.read()
js_compiler = execjs.compile(js_code)


def decode_message(data):
    """解码接收到的消息"""
    try:
        ret = js_compiler.call("ks_encdoe_decode.get_decode_data", data)
        print(ret)
        return ret
    except Exception as e:
        print(f'解码错误: {e}')
        return None


async def on_open(ws, encoded_data):
    """连接建立时的处理函数"""
    print("[Connected] WebSocket established")

    # 初始化时间戳
    last_message_time = time.time()
    last_ping_time = time.time()

    # 发送初始数据
    await send_initial_data(ws, encoded_data)

    # 启动心跳和消息处理任务
    heartbeat_task = asyncio.create_task(send_heartbeat(ws, last_ping_time, last_message_time))
    message_task = asyncio.create_task(on_message(ws, last_message_time))

    # 等待任一任务完成（通常是异常）
    try:
        await asyncio.gather(heartbeat_task, message_task)
    except Exception as e:
        print(f"[Task Error] {e}")
        await on_error(ws, e)


def hex_to_binary(hex_str):
    binary_str = bytes.fromhex(hex_str)
    return binary_str


async def send_initial_data(ws, encoded_data):
    """发送初始数据"""
    await ws.send(hex_to_binary(encoded_data))
    print("[Data] Initial data sent")


async def send_heartbeat(ws, last_ping_time, last_message_time):
    """发送心跳包并监控连接状态"""
    while True:
        try:
            # 发送ping并等待pong响应
            await asyncio.wait_for(ws.ping(), timeout=PING_TIMEOUT)
            print(f"[Heartbeat] Ping sent at {time.strftime('%X')}")
            last_ping_time = time.time()

            # 等待下一次心跳
            await asyncio.sleep(HEARTBEAT_INTERVAL)

            # 检查是否长时间未收到消息
            current_time = time.time()
            if current_time - last_message_time > HEARTBEAT_INTERVAL * 2:
                raise TimeoutError("No message from server for too long")

        except (asyncio.TimeoutError, websockets.exceptions.ConnectionClosed) as e:
            print(f"[Heartbeat] Connection issue: {e}")
            raise  # 触发重连
        except Exception as e:
            print(f"[Heartbeat] Unexpected error: {e}")
            raise


async def on_message(ws, last_message_time):
    """处理接收到的消息"""
    while True:
        try:
            # 接收消息并更新时间戳
            binary_data = await ws.recv()
            last_message_time = time.time()

            # 处理消息
            hex_data = binary_data.hex()
            data = decode_message(hex_data)
            print('decode_data:::', data)

        except websockets.exceptions.ConnectionClosedOK:
            print("[Message] Connection closed normally")
            break
        except websockets.exceptions.ConnectionClosedError as e:
            print(f"[Message] Connection closed with error: {e.code}")
            raise
        except Exception as e:
            print(f"[Message] Processing error: {e}")
            raise


async def on_error(ws, error):
    """错误处理函数"""
    print(f"[Error] {error}")
    await on_close(ws)


async def on_close(ws):
    """连接关闭时的处理函数"""
    print("[Closed] WebSocket connection closed")
    await reconnect()


async def calculate_reconnect_delay(reconnect_attempts):
    """计算指数退避重连延迟"""
    # 指数退避算法：base_delay * factor^attempts
    delay = MIN_RECONNECT_DELAY * (RECONNECT_FACTOR ** reconnect_attempts)
    # 添加随机抖动（±20%）
    jitter = random.uniform(0.8, 1.2)
    delay = delay * jitter
    # 限制最大延迟
    return min(delay, MAX_RECONNECT_DELAY)


async def reconnect():
    """尝试重连"""
    global reconnect_attempts, status

    if reconnect_attempts >= MAX_RECONNECT_ATTEMPTS:
        print(f"[Reconnect] Max reconnect attempts reached ({MAX_RECONNECT_ATTEMPTS}), giving up")
        return

    status = ConnectionStatus.DISCONNECTED
    delay = await calculate_reconnect_delay(reconnect_attempts)
    reconnect_attempts += 1
    print(f"[Reconnect] Attempt {reconnect_attempts}, waiting {delay:.2f} seconds...")
    await asyncio.sleep(delay)

    # 初始化请求头
    headers = {
        'accept-encoding': 'gzip, deflate, br, zstd',
        'host': 'livejs-ws-group11.gifshow.com',
        'Upgrade': 'websocket',
        'Origin': 'https://live.kuaishou.com',
        'Cache-Control': 'no-cache',
        'Accept-Language': 'zh-CN,zh;q=0.9',
        'Pragma': 'no-cache',
        'Connection': 'Upgrade',
        'Sec-WebSocket-Key': sec_websocket_key,
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/137.0.0.0 Safari/537.36',
        'Sec-WebSocket-Version': '13',
        'Sec-WebSocket-Extensions': 'permessage-deflate; client_max_window_bits',
    }

    await connect_to_websocket(ws_url, headers, encoded_data)


async def connect_to_websocket(ws_url, headers, encoded_data):
    """建立WebSocket连接"""
    global reconnect_attempts, status

    print(f"[Connecting] Attempt {reconnect_attempts + 1}")
    status = ConnectionStatus.CONNECTING

    try:
        # 建立连接
        async with websockets.connect(
                ws_url,
                extra_headers=headers,
                ssl=ssl_context,
                ping_interval=None,  # 禁用内置ping，使用自定义心跳
                close_timeout=5
        ) as ws:
            status = ConnectionStatus.CONNECTED
            reconnect_attempts = 0
            await on_open(ws, encoded_data)

    except websockets.exceptions.ConnectionClosedOK:
        print("[Connect] Connection closed normally, exiting")
    except (websockets.exceptions.ConnectionClosedError, TimeoutError) as e:
        print(f"[Connect] Connection lost: {e}")
        await on_error(None, e)
    except Exception as e:
        print(f"[Connect] Unexpected error: {e}")
        await on_error(None, e)


async def start_client(ws_url, sec_websocket_key, encoded_data):
    """启动WebSocket客户端"""
    # 初始化请求头
    headers = {
        'accept-encoding': 'gzip, deflate, br, zstd',
        'host': 'livejs-ws-group11.gifshow.com',
        'Upgrade': 'websocket',
        'Origin': 'https://live.kuaishou.com',
        'Cache-Control': 'no-cache',
        'Accept-Language': 'zh-CN,zh;q=0.9',
        'Pragma': 'no-cache',
        'Connection': 'Upgrade',
        'Sec-WebSocket-Key': sec_websocket_key,
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/137.0.0.0 Safari/537.36',
        'Sec-WebSocket-Version': '13',
        'Sec-WebSocket-Extensions': 'permessage-deflate; client_max_window_bits',
    }

    await connect_to_websocket(ws_url, headers, encoded_data)


if __name__ == '__main__':
    # 全局变量
    reconnect_attempts = 0
    status = ConnectionStatus.DISCONNECTED

    ws_url = 'wss://livejs-ws-group5.gifshow.com/websocket'
    sec_websocket_key = 'Jv9KPuDRqGB4/xgvkMZpkQ=='
    encoded_data = '08c8011a88020ad80131576a657336664f576f373939625379324f2f675678784f4e44672f487531453977387a5251756c5737373355666d4a534579424e5a67374d79636f5a776a37555173654b4636426e614f6a784d2b545739512b36596d695970325958382b57493033587871575857577a4a515455414638334b5230706c59546556476f745170586939675a6d5948646f4359526b6e44342b516a4a32776d543062364b6f31636f78416c676869586456447135796a3054444e566f4e6b5a6e6d373533564d363543495356594459306e64567455753974473863413d3d120b466f4d344c4b42473379673a1e3548645156486b747371313665694e385f31373439383734303634333738'

    asyncio.run(start_client(ws_url, sec_websocket_key, encoded_data))

'''
{
    "type": "CS_ENTER_ROOM",
    "payload": {
        "liveStreamId": "yqEnr7BJzlc",
        "token": "2ZRowGkz67WMce/9uBT2Bcx+M0t5wbbavW5Pscbn2AXHsnOyLH/fBxOLApM2szjJvLlWzHdOjSggrbEjJWgvDLoHQ9frVueXfAWT3FHQkN9ubZdf+46dTYyjyv9sq4jvfZ1KvSXVYgm2PQLjFgZ73enWCcD3fSm1WvcIwkPDygo7sSXIeNPvpEN88MISwpyPOblBkWFhhZGq5nX0GaJ0DA==",
        "pageId": ""
    }
}
'''
