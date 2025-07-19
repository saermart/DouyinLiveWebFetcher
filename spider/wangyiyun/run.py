from pprint import pp
import requests
import execjs
import json

# (1) 获取动态逆向值

with open("wangyiyun.js") as f:
    js_code = f.read()
js_compile = execjs.compile(js_code)
song_id = 5259002
t = {"ids": f"[{song_id}]", "br": 128000, "csrf_token": ""}

x1 = json.dumps(t)
print(x1)
x2 = '010001'
x3 = '00e0b509f6259df8642dbc35662901477df22677ec152b5ff68ace615bb7b725152b3ab17a876aea8a5aa76d2e417629ec4ee341f56135fccf695280104e0312ecbda92557c93870114af6c9d05c4f7f0c3685b7a46bee255932575cce10b424d813cfe4875d3e82047b97ddef52741d546b8e289dc6935b3ece0462db0a22b8e7'
x4 = '0CoJUm6Qyw8W8jud'
ret = js_compile.call("window.asrsea", x1, x2, x3, x4)
pp(ret)
data = {
    "params": ret["encText"],
    "encSecKey": ret["encSecKey"]
}

# (2) 发起请求
headers = {
    'origin': 'https://music.163.com',
    'referer': 'https://music.163.com/outchain/player?type=2&id=2047794843&auto=1&height=66&bg=e8e8e8',
    'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/129.0.0.0 Safari/537.36',
}

url = "https://music.163.com/weapi/song/enhance/player/url"
res = requests.post(url, data=data, headers=headers)
pp(res.json()['data'][0]['url'])

# (3) 下载歌曲
res = requests.get(res.json()['data'][0]['url'])
with open("当爱已成往事.mp3", "wb") as f:
    f.write(res.content)
