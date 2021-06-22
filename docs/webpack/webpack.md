---
sidebar_position: 1
---


# webpack

webpack是静态模块打包器

## 五个核心概念

1. `entry`  入口
2. `output` 输出
3. `loader` loader让Webpack能够去处理非JS文件（Webpack自身只能理解js）
4. `plugin` plugin可以执行范围更广的任务，包括打包优化，压缩，定义环境变量等
5. `mode` 分成两种模式： **development** 和 **production**


## 指令
```bash
webpack ./src/index.js -o ./build/build.js --mode=development
```