---
title: Swiper在window触摸平板上不能使用的临时解决方案
date: 2020-11-16 19:58:22
tags:
categories:
    - 问题解决
---


![bg2017022201.jpg](https://pic2.zhimg.com/v2-66349abb06b219dfd95560ce129fa3e6_1440w.jpg?source=172ae18b)

最近在做华为大屏的应用适配，发现swiper在window的触摸设备上无法使用（touch事件处理有问题），查询原因，发现swiper源码对window触摸屏的判断有问题，从而导致swiper不支持window触摸设备操作。
<!-- more -->

解决方案如下：

```javascript
// 检测设备是否支持触摸
function touchCapable() {
    return (
      'ontouchstart' in window||
      (window.DocumentTouch && document instanceof window.DocumentTouch) ||
      navigator.maxTouchPoints > 0 ||
      window.navigator.msMaxTouchPoints > 0
    );
  };

// new Swiper的配置项，增加simulate选项
swiperConfig = {
 simulateTouch : !touchCapable()
}
```
如果在window触摸屏幕上，滑动到边界触发了其他行为（如触发了浏览器的前进后退），可以添加一个css属性禁止此行为：

```html
html, body { overscroll-behavior: none; }
```