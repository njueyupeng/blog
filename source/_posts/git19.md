---
title: git常用命令汇总
tags:
  - 通用技能
categories:
  - git
date: 2019-06-08 10:10:00
---

本文记录常用的 git 命令，方便后续回顾和查询。

本文命令参考了网站https://learngitbranching.js.org/

<!-- more -->

## 主要操作

### 基础篇

> > git 会将当前版本与仓库中上一个版本进行对比，并把所有的差异打包到一起作为一个提交记录。
> > 我们可以把提交记录看作是项目的快照

#### 1. git comit

      ```
      git commit
      git commit -m message
      ```

> > 早建分支，多用分支

### 2. git branch <name>

### 3. git checkout <name>

切换分支

### 4. git checkout -b <name>

快捷创建并切换分支

### 5. git merge

相当于生成一个新的提交记录，这个记录会有两个父节点

```
git merge master feature
```

相当于

```
git checkout feature
git merge master
```

### 6. git rebase

Rebase 实际上就是取出一系列的提交记录，“复制”它们，然后在另外一个地方逐个的放下去。Rebase 的优势就是可以创造更线性的提交历史,如果只允许使用 Rebase 的话，代码库的提交历史将会变得异常清晰。

```
git chekout bugFix
git rebase master // 此时master的指针还停留在原先的节点
git rebase bugFix
```

## 远程仓库

### git clone

在本地创建一个远程仓库的拷贝

当使用 git 时，远程仓库默认为 origin

### git fetch

相当于单纯的下载，并不会更新本地文件

### git pull

相当于

```
git fetch
git merge origin/master
```

### git push

### 与远程合并提交

```
git fetch
git rebase origin/master
git push
```

或者

```
git fetch
git merge origin/master
git push
```

或者

```
git pull // 相当于git fetch  git merge origin/master
git push

```

```
git pull --rebase // 相当于git fetch  git rebase origin/master
git push

```

### rebase

优点：

- 提交树更干净，所有的提交都在一条线上

缺点：

- rebase 修改了提交树的历史
