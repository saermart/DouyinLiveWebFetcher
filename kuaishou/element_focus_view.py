import time
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.chrome.service import Service
from selenium.common.exceptions import NoSuchElementException
from webdriver_manager.chrome import ChromeDriverManager


def focus_on_element(url, element_selector, padding=20):
    """
    打开网页，检测特定元素，然后调整浏览器窗口大小，使其刚好显示该元素

    参数:
    url (str): 目标网页URL
    element_selector (str): 要聚焦的元素的CSS选择器
    padding (int): 元素周围的边距像素
    """
    # 设置Chrome选项
    chrome_options = webdriver.ChromeOptions()
    chrome_options.add_argument("--start-maximized")  # 初始最大化窗口以便正确计算元素位置
    chrome_options.add_argument('--disable-window-size-constraints')  # 禁用窗口大小限制
    chrome_options.add_argument('--app=https://baidu.com')  # 以应用模式打开，去除标题栏

    # 初始化WebDriver
    driver = webdriver.Chrome(service=Service(ChromeDriverManager().install()), options=chrome_options)

    try:
        # 打开指定URL
        driver.get(url)
        time.sleep(3)  # 等待页面充分加载

        # 尝试定位目标元素
        try:
            target_element = driver.find_element(By.ID, element_selector)
        except NoSuchElementException:
            print(f"未找到匹配选择器 '{element_selector}' 的元素")
            return

        # 获取元素在页面中的位置和尺寸
        location = target_element.location
        size = target_element.size

        # 计算元素在屏幕坐标系中的位置
        # 注意：这可能需要根据不同浏览器和操作系统进行调整
        element_x = location['x']
        element_y = location['y']
        element_width = size['width']
        element_height = size['height']

        # 计算新窗口的尺寸和位置
        new_width = element_width + 2 * padding
        new_height = element_height + 2 * padding
        new_x = max(0, element_x - padding)
        new_y = max(0, element_y - padding)

        # 调整窗口大小和位置
        driver.set_window_size(new_width, new_height)
        driver.set_window_position(new_x, new_y)

        print(f"窗口已调整为仅显示目标元素。元素选择器: {element_selector}")
        print("您可以在窗口中操作该元素。按Enter键退出...")
        input()  # 等待用户输入

    except Exception as e:
        print(f"发生错误: {e}")
    finally:
        driver.quit()


if __name__ == "__main__":
    # 使用示例 - 请替换为实际的URL和CSS选择器
    target_url = "https://baidu.com"
    target_selector = "kw"  # 替换为实际的CSS选择器

    focus_on_element(target_url, target_selector)
