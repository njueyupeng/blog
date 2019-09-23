---
title: golang输出内容到指定文件
date: 2019-09-23 14:16:14
tags:
categories:
  - go
---

使用 go 语言实现输出内容到指定文件

<!-- more -->

```go
package main

import (
    "os"
		"io/ioutil"
		"strconv"
)

func main(){

	string := ""
	for i :=0; i<100000; i++ {
		string += ("<div>"+ strconv.Itoa(i) + "</div>\n")
	}
	data := []byte(string)
  ioutil.WriteFile("file.html",data,os.ModeAppend)

}


```
