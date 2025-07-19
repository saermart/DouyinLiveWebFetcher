import time
import traceback

from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.chrome.service import Service
from webdriver_manager.chrome import ChromeDriverManager


def highlight_and_interact(url, css_selector):
    # 设置Chrome选项
    chrome_options = webdriver.ChromeOptions()
    chrome_options.add_argument("--start-maximized")  # 最大化窗口
    chrome_options.add_argument("--disable-blink-features=AutomationControlled")  # 隐藏自动化特征
    chrome_options.add_argument("--disable-extensions")  # 禁用扩展
    chrome_options.add_argument("--disable-notifications")  # 禁用通知
    chrome_options.add_argument('--disable-window-size-constraints')  # 禁用窗口大小限制
    chrome_options.add_argument('--app=https://baidu.com')  # 以应用模式打开，去除标题栏
    # chrome_options.add_argument("--incognito")  # 无痕模式
    # chrome_options.add_argument('--no-sandbox')
    # chrome_options.add_experimental_option('detach', True)

    # 初始化WebDriver
    driver = webdriver.Chrome(service=Service(ChromeDriverManager().install()), options=chrome_options)

    try:
        # 打开指定URL
        driver.get(url)
        time.sleep(2)  # 等待页面加载

        # 定位目标元素
        target_element = driver.find_element(By.TAG_NAME, css_selector)

        # 滚动到目标元素
        driver.execute_script("arguments[0].scrollIntoView();", target_element)
        time.sleep(1)

        # 创建半透明遮罩覆盖其他区域
        overlay_script = """
            // 创建遮罩元素
            const overlay = document.createElement('div');
            overlay.style.position = 'fixed';
            overlay.style.top = '0';
            overlay.style.left = '0';
            overlay.style.width = '100%';
            overlay.style.height = '100%';
            overlay.style.backgroundColor = 'rgba(0, 0, 0, 0.3)';
            overlay.style.zIndex = '9998';
            document.body.appendChild(overlay);
            
            // 获取目标元素位置和大小
            const target = arguments[0];
            const rect = target.getBoundingClientRect();
            
            // 创建透明区域
            const hole = document.createElement('div');
            hole.style.position = 'absolute';
            hole.style.top = rect.top + 'px';
            hole.style.left = rect.left + 'px';
            hole.style.width = rect.width + 'px';
            hole.style.height = rect.height + 'px';
            hole.style.backgroundColor = 'transparent';
            hole.style.boxShadow = '0 0 0 1px red'; // 高亮目标区域边界
            hole.style.zIndex = '999';
            overlay.appendChild(hole);
            
            // 保存引用以便后续移除
            window.interactionOverlay = overlay;
            """
        # driver.execute_script(overlay_script, target_element)

        print("页面已加载，目标区域已高亮显示。您可以在高亮区域内进行操作。")

        # time.sleep(20)
        input()  # 等待用户输入

        try:
            user_model_close = driver.find_element(By.CSS_SELECTOR, '.user-modal.login-alert div.close')
            if user_model_close:
                user_model_close.click()

        except Exception as e:
            print(e)
            # traceback.format_exc()
            pass

        # print("完成后按Enter键退出...")

        # chat-history

        try:
            chat_list_box = driver.find_element(By.CSS_SELECTOR, 'div.chat-history div.wrapper div.virt-list__client')
            if chat_list_box:
                print(chat_list_box.text)
        except Exception as e:
            print(e)
            pass

        input()

    except Exception as e:
        print(f"发生错误: {e}")

    finally:
        # 清理操作
        try:
            # 移除遮罩
            driver.execute_script("if(window.interactionOverlay) { document.body.removeChild(window.interactionOverlay); }")
        except:
            pass
        driver.quit()


if __name__ == "__main__":
    # 使用示例 - 请替换为实际的URL和CSS选择器
    target_url = "https://live.kuaishou.com/u/G81210582"
    target_selector = "iframe"

    highlight_and_interact(target_url, target_selector)
