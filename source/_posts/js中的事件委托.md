---
title: js中的事件委托
date: 2018-10-12 15:32:10
tags:
    - JavaScript
---

事件委托，顾名思义，就是将本来需要A处理的事情，委托给B来处理。在JavaScript中的事件委托又称事件代理，事件委托就是利用事件冒泡，只指定一个事件处理程序，就可以管理某一类型的所有事件。当然，如果子元素阻止了事件冒泡，那么委托也就没法实现了。

如何举个例子形容呢：
有三个同事预计会在周一收到快递。为签收快递，有两种办法：一是三个人在公司门口等快递；二是委托给前台MM代为签收。现实当中，我们大都采用委托的方案（公司也不会容忍那么多员工站在门口就为了等快递）。前台MM收到快递后，她会判断收件人是谁，然后按照收件人的要求签收，甚至代为付款。这种方案还有一个优势，那就是即使公司里来了新员工（不管多少），前台MM也会在收到寄给新员工的快递后核实并代为签收。

这里其实还有2层意思的：

第一，现在委托前台的同事是可以代为签收的，即程序中的现有的dom节点是有事件的；

第二，新员工也是可以被前台MM代为签收的，即程序中新添加的dom节点也是有事件的。


下面我们举一个代码例子：

我们要实现一个需求，当鼠标悬浮在li元素上，li元素背景变成红色，离开时，去掉背景。代码如下：

```html
<ul id="ul">
    <li>a</li>
    <li>b</li>
    <li>c</li>
</ul>

```
```javascript
window.onload = function(){
  var oUl = document.getElementById("ul");
  var aLi = oUl.getElementsByTagName("li");

  for(var i=0; i<aLi.length; i++){
    aLi[i].onmouseover = function(){
      this.style.background = "red";
    }
    aLi[i].onmouseout = function(){
      this.style.background = "";
    }
  }
}
```
我们循环遍历每一个li元素，并为之加上mouserover和mouseout事件。这只适用于li元素特别少的情况，如果li元素特别多，定会引起性能问题。还有一个问题，如果这时候动态添加了一个li元素，这个元素是没法响应事件的，因为没有给他绑定任何事件。


### 通过事件委托实现

```javascript
window.onload=function(){
    var oUl = document.getElementById('ul');
    oUl.onmouseover = function(e){
        var e = e || window.event;
        var target = e.target || e.srcElement;
        if(target.nodeName.toLowerCase() == "li"){
        target.style.background = "red";
        }
    }
    oUl.onmouseout = function(e){
        var e = e || window.event;
        var target = e.target || e.srcElement;
        if(target.nodeName.toLowerCase() == "li"){
        target.style.background = "";
        }
    }
}
}
```

在这段代码中，通过 **event.target** 来实现事件委托。这种方法避免了循环，提高了性能。

>> 标准浏览器用event.target，IE浏览器用event.srcElement

新问题，如果li还包含了其他元素怎么办呢，这样target就不是li了。
解决办法：
```javascript
　　var oUl = document.getElementById('test');
    oUl.addEventListener('click',function(ev){
        var target = ev.target;
        while(target !== oUl ){
            if(target.tagName.toLowerCase() == 'li'){
                console.log('li click~');
                break;
            }
            target = target.parentNode;
        }
    })

```

### 另外一个例子：
```html
<div id="box">
        <input type="button" id="add" value="添加" />
        <input type="button" id="remove" value="删除" />
        <input type="button" id="move" value="移动" />
        <input type="button" id="select" value="选择" />
</div>
```
不用事件委托：
```javascript
window.onload = function(){
            var Add = document.getElementById("add");
            var Remove = document.getElementById("remove");
            var Move = document.getElementById("move");
            var Select = document.getElementById("select");
            
            Add.onclick = function(){
                alert('添加');
            };
            Remove.onclick = function(){
                alert('删除');
            };
            Move.onclick = function(){
                alert('移动');
            };
            Select.onclick = function(){
                alert('选择');
            }
}
```

使用事件委托：
```javascript
window.onload = function(){
            var oBox = document.getElementById("box");
            oBox.onclick = function (ev) {
                var ev = ev || window.event;
                var target = ev.target || ev.srcElement;
                if(target.nodeName.toLocaleLowerCase() == 'input'){
                    switch(target.id){
                        case 'add' :
                            alert('添加');
                            break;
                        case 'remove' :
                            alert('删除');
                            break;
                        case 'move' :
                            alert('移动');
                            break;
                        case 'select' :
                            alert('选择');
                            break;
                    }
                }
            }
            
        }
```