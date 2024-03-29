---
title: 什么是 Cookie 隔离？
author: 于鹏
date: 2019-06-23 20:25:00
tags:
  - web
categories:
  - 前端
---

**简介：**本文介绍什么是 Cookie 隔离，以及为什么要做 cookie 隔离。

<!--more-->

如果静态文件都放在主域名下，那静态文件请求的时候都带有的 cookie 的数据提交给 server 的，非常浪费流量，
所以不如隔离开。

因为 cookie 有域的限制，因此不能跨域提交请求，故使用非主要域名的时候，请求头中就不会带有 cookie 数据，
这样可以降低请求头的大小，降低请求时间，从而达到降低整体请求延时的目的。

同时这种方式不会将 cookie 传入 Web Server，也减少了 Web Server 对 cookie 的处理分析环节，
提高了 webserver 的 http 请求的解析速度。
