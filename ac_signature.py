#!/usr/bin/python
# coding:utf-8
import time

def get__ac_signature(one_site: str, one_nonce: str, ua_n: str,one_time_stamp: int=int(time.time())) -> str:
    """计算x音的 _ac_signature 参数

    参数:
        one_time_stamp: 时间戳 (整数)
        one_site: 网站域名 (字符串)
        one_nonce: 随机字符串 (字符串)
        ua_n: User-Agent 字符串 (字符串)

    返回:
        _ac_signature 字符串
    """
    
    def cal_one_str(one_str: str, orgi_iv: int) -> int:
        """计算字符串的哈希值 (方法1)"""
        k = orgi_iv
        for char in one_str:
            a = ord(char)
            k = ((k ^ a) * 65599) & 0xFFFFFFFF  # 模拟 JavaScript 的 >>> 0
        return k
    
    def cal_one_str_2(one_str: str, orgi_iv: int) -> int:
        """计算字符串的哈希值 (方法2)"""
        k = orgi_iv
        a = len(one_str)
        for _ in range(32):
            # 使用 k % a 作为索引确保在字符串范围内
            char_index = k % a
            k = (k * 65599 + ord(one_str[char_index])) & 0xFFFFFFFF
        return k
    
    def cal_one_str_3(one_str: str, orgi_iv: int) -> int:
        """计算字符串的哈希值 (方法3)"""
        k = orgi_iv
        for char in one_str:
            k = (k * 65599 + ord(char)) & 0xFFFFFFFF
        return k
    
    def get_one_chr(enc_chr_code: int) -> str:
        """将数字编码转换为字符"""
        if enc_chr_code < 26:
            return chr(enc_chr_code + 65)  # A-Z
        elif enc_chr_code < 52:
            return chr(enc_chr_code + 71)  # a-z (71 = 65 - 26 + 6)
        elif enc_chr_code < 62:
            return chr(enc_chr_code - 4)  # 0-9
        else:
            return chr(enc_chr_code - 17)  # + 和 /
    
    def enc_num_to_str(one_orgi_enc: int) -> str:
        """将32位整数编码为4字符字符串"""
        s = ''
        # 处理24位数据 (4组6位)
        for i in range(24, -1, -6):
            # 提取6位数据
            bits = (one_orgi_enc >> i) & 63
            s += get_one_chr(bits)
        return s
    
    # 主逻辑开始
    sign_head = '_02B4Z6wo00f01'
    time_stamp_s = str(one_time_stamp)
    
    # 步骤1: 计算 a
    a = cal_one_str(one_site, cal_one_str(time_stamp_s, 0)) % 65521
    
    # 步骤2: 计算 b
    # 创建二进制字符串: "10000000110000" + 32位二进制字符串
    bin_str = bin(one_time_stamp ^ (a * 65521))[2:].zfill(32)
    b = int("10000000110000" + bin_str, 2)
    b_s = str(b)
    
    # 步骤3: 计算 c
    c = cal_one_str(b_s, 0)
    
    # 步骤4: 计算 d, e, f, g, h, i
    d = enc_num_to_str(b >> 2)
    e = (b // 4294967296) & 0xFFFFFFFF  # 模拟 >>> 0
    f = enc_num_to_str((b << 28) | (e >> 4))
    g = 582085784 ^ b
    h = enc_num_to_str((e << 26) | (g >> 6))
    i = get_one_chr(g & 63)
    
    # 步骤5: 计算 j, k, l, m
    j = ((cal_one_str(ua_n, c) % 65521) << 16) | (cal_one_str(one_nonce, c) % 65521)
    k = enc_num_to_str(j >> 2)
    l = enc_num_to_str((j << 28) | ((524576 ^ b) >> 4))
    m = enc_num_to_str(a)
    
    # 步骤6: 组合各部分
    n = sign_head + d + f + h + i + k + l + m
    
    # 步骤7: 计算校验位 o
    o_hex = hex(cal_one_str_3(n, 0))[2:]  # 转换为16进制
    o = o_hex[-2:].zfill(2)  # 取最后两位
    
    # 最终签名
    signature = n + o
    return signature

    