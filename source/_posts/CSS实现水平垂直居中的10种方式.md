---
title: CSS实现水平垂直居中的10种方式
date: 2018-09-13 18:57:06
tags:
    - 前端开发
    - CSS
---

实现水平垂直居中，是一道经典的面试题，同时，在平时开发中，也是特别常见的场景。

在这篇文章中，我将对利用CSS实现水平垂直居中的方法做个总结。


## 居中元素宽高固定

对于居中元素宽高固定的场景，我们先设置以下前提代码，方便理解：

```html
<div class="wrap">
    <div class="child">我是需要垂直居中的DIV</div>
</div>

<style>
    .wrap{
        width:300px;
        height:300px;
    }
    .child{
        width:100px;
        height:100px;
    }
</style>
```

### 方案1. absolute+ margin auto

```css
.wrap{
    position:relative;
}
.child{
    position:absolute;
    left:0;
    top:0;
    right:0;
    bottom:0;
    margin:auto;
}
```
这种方案兼容性好，但是子元素需要有宽高，否则，子元素会撑满父容器。

### 方案2. absolute+ 负margin

绝对定位的百分比是子元素左上角相对于父元素的宽高定位，通过设置子元素绝对定位，同时上下各50%，可以实现子元素左上角在父元素中心点。
通过margin设置子元素外边距为子元素宽度的一半，可以使子元素向相反的方向偏移，便可以实现居中。

```css
.wrap{
    position:relative
}
.child{
    position:absolute;
    top:50%;
    left:50%;
    margin-left:-50px;
    margin-right:-50px;
}
```

这种方案兼容性好，但是，同样需要知道子元素的宽高。


### 方案3. absolute + calc

利用css3计算属性,可以实现与方案2类似的效果。

```css
.wrap{
    position:relative;
}
.child{
    position:absolute;
    top: calc(50% - 50px);
    left: calc(50% - 50px);
}
```
缺点也是需要知道子元素宽高，同时依赖于calc的兼容性。[点击这里查询calc兼容性。](https://caniuse.com/#search=calc)



## 居中元素宽高不固定

对于居中元素宽高不固定的场景，我们先设置以下前提代码：
```html
<div class="wrap">
    <div class="child">我的宽高不固定</div>
</div>
```

### 方案4. absolute + transform

css3新增的transform，transform的translate属性也可以设置百分比，其实相对于自身的宽和高，所以可以设置translate为-50%，就可以做到居中。
```
.wrap{
    position:relative
}
.child{
    position:absolute;
    top:50%;
    left:50%;
    trasform:translate(-50%,-50%)
}
```
这种方案依赖于translate2d的兼容性。[点击这里查询兼容性。](https://caniuse.com/)