---
layout: '''nodejs'
title: 安装node-sass报错的解决方案
date: 2018-01-19 15:35:49
tags: 问题解决
---

我们有时候在用node安装node-sass的时候会报错，网上找原因后，好多推荐使用淘宝镜像安装，但还是解决不了。主要原因不仅仅是npm包镜像的问题，还需要设置淘宝node源码镜像（一些二进制包编译时用），以及设置node-sass镜像。

在命令行中输入以下安装命令即可：
```
npm install --save node-sass --registry=https://registry.npm.taobao.org --disturl=https://npm.taobao.org/dist --sass-binary-site=http://npm.taobao.org/mirrors/node-sass
```

- --registry=https://registry.npm.taobao.org 淘宝npm包镜像
- --disturl=https://npm.taobao.org/dist 淘宝node源码镜像，一些二进制包编译时用
- --sass-binary-site=http://npm.taobao.org/mirrors/node-sass 这个才是node-sass镜像