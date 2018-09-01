---
title: git教程
date: 2018-05-25 19:28:47
tags:
    - 工具
---

![](http://otja7p1i5.bkt.clouddn.com/1201991-20171205171617456-1299524289.png)

## Git简介

Git是目前世界上最现金的分布式版本控制系统（没有之一）。

SVN是集中式的版本控制系统，必须联网才能使用，所以Linus花了两周时间用c写了一个分布式版本控制系统，就是git。


### 设置全局用户名和邮箱:
```
$ git config --global user.name "Your Name"
$ git config --global user.email "example@email.com"
```

### 创建版本库

```
$ mkdir learngit
$ cd learngit
$ git init
```

用命令 **git add**告诉Git，把文件添加到仓库
```
git add readme.txt
git add file1.txt file2.txt
```

用命令 **git commit**告诉Git，把文件提交到仓库
```
git commit -m "write a readme txt"
```

用命令 **git status** 命令可以让我们时刻掌握仓库当前的的状态
用命令 **git diff** 可以查看具体修改了什么内容
```
git diff 

git diff readme.txt
```

用 **git log** 查看提交日志
用 **git log --pretty=online** 查看简单日志



## 版本回退

在Git中，用 **HEAD** 表示当前版本，也就是最新的提交，上一个版本是 **HEAD^**, 上上一个版本就是 **HEAD^^**, 也可以写成 **HEAD~100**

使用 **git reset** 会退到某一个版本
```
$ git reset --hard HEAD^
```

回退后，最新的版本就看不到了。
也可以填写commit id
```
$ git rest --hard 1094a
```

Git提供了一个命令 **git reflog**用来记录每一次命令