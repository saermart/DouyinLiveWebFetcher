import subprocess
import json


def main():
    # 创建一个Node.js脚本文件
    node_script = """
    const fs = require('fs');
    
    // 读取并合并JS文件
    const jsFiles = ['all.js', 'vendors.91066743a9c8a9d8dc1f.js', 'purecommon.91066743a9c8a9d8dc1f.js', 'liveRoom.91066743a9c8a9d8dc1f.js', 'app.91066743a9c8a9d8dc1f.js'];
    let jsCode = '';
    
    jsFiles.forEach(file => {
        jsCode += fs.readFileSync(file, 'utf8') + '\\n';
    });
    
    // 执行异步操作
    const vm = require('vm');
    const context = vm.createContext({
        console,
        window: {},
        setTimeout,
        Promise
    });
    
    vm.runInContext(jsCode, context);
    
    // 执行目标函数并处理Promise
    context.window.Jose.call('$getCatVersion')
      .then(result => {
        console.log(JSON.stringify({ status: 'success', result }));
        process.exit(0);
      })
      .catch(error => {
        console.log(JSON.stringify({ status: 'error', message: error.toString() }));
        process.exit(1);
      });
    """

    with open('runner.js', 'w') as f:
        f.write(node_script)

    # 执行Node.js脚本
    try:
        result = subprocess.check_output(['node', 'runner.js'], stderr=subprocess.STDOUT)
        parsed = json.loads(result.decode('utf-8'))
        if parsed['status'] == 'success':
            print("执行结果:", parsed['result'])
        else:
            print("错误:", parsed['message'])
    except subprocess.CalledProcessError as e:
        print("执行失败:", e.output.decode('utf-8'))


if __name__ == '__main__':
    main()
