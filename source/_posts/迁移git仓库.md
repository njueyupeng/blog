---
title: 迁移git仓库
date: 2021-10-18 13:12:48
tags: git
categories: 
---

有时候我们需要将一个git仓库的代码，包括提交历史，完整迁移到另外一个仓库，可以按一下步骤来操作：

1. 从原地址克隆一份裸版本库。
```bash
git clone --bare http://github....(原始仓库地址)
```

2. 进入克隆下的文件目录，以镜像推送的方式上传代码到新的仓库地址。
```bash
git push --mirror http://...(目标仓库地址)
```