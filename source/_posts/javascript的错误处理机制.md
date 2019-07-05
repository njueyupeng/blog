---
title: javascript的错误处理机制
date: 2019-05-13 17:25:07
tags:
categories:
  - 前端
  - JavaScript
---

**简介：**本文介绍 js 的错误处理方式以及 try{...}catch(e){...}finally{...}的使用方法。

<!--more-->

## 1. Error 实例对象

```javascript
let err = new Error('信息');
err.message; // 错误提示信息
err.name; // 错误名称（非标准属性）
err.stack; // 错误的堆栈（非标准属性）
```
