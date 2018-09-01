---
title: vue
date: 2018-04-05 19:40:41
thumbnail: http://otja7p1i5.bkt.clouddn.com/stockholm-2816161_640.jpg
tags:
---


![](http://otja7p1i5.bkt.clouddn.com/stockholm-2816161_640.jpg)
## 第一章 初识Vue.js

<!-- more -->
现代Web开发中常见的高级功能：

- 解耦视图与数据
- 可复用的组件
- 前端路由
- 状态管理
- 虚拟DOM(Virtual DOM)


### MVVM模式（Model-View-View-Model）

MVVM由MVC衍生而来。当View（视图层）变化时，会自动更新到ViewModel（视图模型），反之亦然。View和ViewModel之间通过双向数据绑定（data-binding）建立联系。

    Model <---> ViewModel <---> View


## 第二章 数据绑定

Vue.js应用的创建：
```js
var app = new Vue({
    //选项
})
```
必不可少的第一个选项是el,el用于指定一个页面已经存在的一个DOM元素来挂载Vue实例，他可以是HTMLElement，也可以是CSS选择器。

```js
var app = new Vue({
    el：document.getElementById('app');//或者 '#app'
})
```
挂载成功后，可以通过app.$el访问该元素。


### 生命周期


1   