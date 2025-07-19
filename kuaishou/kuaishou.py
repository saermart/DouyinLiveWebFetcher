import execjs

# 读取并合并多个 JS 文件（按依赖顺序）
js_files = ['all.js', 'vendors.91066743a9c8a9d8dc1f.js', 'purecommon.91066743a9c8a9d8dc1f.js', 'liveRoom.91066743a9c8a9d8dc1f.js',
            'app.91066743a9c8a9d8dc1f.js']  # 按 Webpack 输出顺序
js_code = ''

for file in js_files:
    with open(file, 'r', encoding='utf-8') as f:
        js_code += f.read() + '\n'

# 创建 Node.js 运行环境
ctx = execjs.compile(js_code)

# 执行 JS 代码（包括异步操作）
# 对于异步结果，可通过回调或 Promise 处理
result = ctx.eval("""
    // 等待所有异步模块加载完成
    window.Jose.call("$getCatVersion")
""")

print("执行结果:", result)
