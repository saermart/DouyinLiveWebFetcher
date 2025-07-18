import time

from selenium import webdriver
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.chrome.service import Service

# 设置 ChromeDriver 路径（如果已添加到 PATH，可省略）
service = Service('/usr/local/bin/chromedriver')

chrome_options = Options()
chrome_options.add_argument("--disable-blink-features=AutomationControlled")  # 隐藏自动化特征
chrome_options.add_argument("--start-maximized")  # 最大化窗口
chrome_options.add_argument("--disable-extensions")  # 禁用扩展
chrome_options.add_argument("--disable-notifications")  # 禁用通知
chrome_options.add_argument("--incognito")  # 无痕模式
chrome_options.add_argument('--no-sandbox')
chrome_options.add_experimental_option('detach', True)

# 服务配置

# 创建 Chrome 浏览器实例
a1 = webdriver.Chrome(service=service, options=chrome_options)

# 打开网页
# a1.get('https://www.sina.cn')
a1.get('https://live.kuaishou.com/u/G81210582')

# 打印页面标题
print(f"页面标题: {a1.title}")

time.sleep(3)

# 关闭标签页
# a1.close()

# 关闭浏览器
# a1.quit()
