import execjs

# 创建一个JS运行环境
context = execjs.compile("""
    function sayHello(name) {
        return 'Hello, ' + name;
    }
""")
# 调用JavaScript中的函数
result = context.call("sayHello", "World")
print(result)  # 输出：Hello, World
