---
title: JavaScript语言规范
date: 2018-03-28 21:51:21
tags:
---

最近读了Google公司的JavaScript风格指南[Google JavaScript Style Guide](http://google-styleguide.googlecode.com/svn/trunk/javascriptguide.xml),觉得获益匪浅，特此翻译出此篇文章，方便以后自己回顾并规范自己的代码规范。如果这篇文章有幸能被各位同行看到，并给大家带来帮助，我一定甚感欣慰。

[TOC]

## JavaScript 语言规范

### 1. 变量

    规范：声明变量必须加上 **var** 关键字

    说明：没有加 **var** ,就会使变量暴露到全局的上下文中，容易造成变量冲突，很难明确变量作用域。


### 2. 常亮

    规范：
