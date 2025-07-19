from selenium import webdriver
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.chrome.service import Service
import base64  # 导入 base64 模块

if __name__ == '__main__':
    service = Service('/usr/local/bin/chromedriver')
    # 设置 Chrome 选项
    chrome_options = Options()
    chrome_options.add_argument("--headless")  # 无头模式，不显示浏览器窗口
    chrome_options.add_argument("--disable-gpu")  # 禁用 GPU 加速，在无头模式下可能需要
    chrome_options.add_argument("--window-size=1920,1080")  # 设置窗口大小

    # 创建 Chrome 浏览器实例
    driver = webdriver.Chrome(service=service, options=chrome_options)

    try:
        # 打开网页
        url = "https://www.baidu.com"  # 替换为你想要打开的网页 URL
        driver.get(url)

        # 等待页面加载完成（根据实际情况调整等待时间或使用更智能的等待方式）
        driver.implicitly_wait(10)

        # 使用 Chrome DevTools Protocol 执行打印操作
        # 这里将页面保存为 PDF 文件
        print_options = {
            'landscape': False,  # 纵向打印
            'displayHeaderFooter': False,  # 不显示页眉页脚
            'printBackground': True,  # 打印背景
            'preferCSSPageSize': True,  # 优先使用 CSS 页面尺寸
        }

        result = driver.execute_cdp_cmd('Page.printToPDF', print_options)

        # 将 PDF 数据保存到文件
        with open('page.pdf', 'wb') as file:
            file.write(base64.b64decode(result['data']))  # 使用 base64.b64decode() 解码数据

        print("页面已成功保存为 PDF 文件")

    except Exception as e:
        print(f"发生错误: {e}")

    finally:
        # 关闭浏览器
        driver.quit()
