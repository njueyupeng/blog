---
title: 聊聊Es6中的Set
date: 2018-03-16 19:14:45
tags: 
    - JavaScript
---

## 基本用法

Set是Es6中的一种新的数据结构。它类似于数组，但是它的成员值都是唯一的。

我们可以用构造函数Set生成Set数据结构。

```javascript
    const s = new Set();

    [2,3,5,4,5,2,3].forEach(item=>s.add(item));

    for(let i of s){
        console.log(i);// 2,3,5,4
    }

```

由上面代码可见,通过add方法可以向Set结构加入成员，而且，Set结构不会添加重复的值。


Set函数可以接受一个数组（或者具有interable接口的其他数据结构）作为参数，用来初始化。

```javascript
//demo 01
const set = new Set([1,2,3,4,4,4]);
[...set] //[1,2,3,4]
set.size;//4

//demo 02
const itesetms = new Set(document.querySelectorAll("div"));
set.size://56  
```

上面例子中，例子1表明Set函数可以接收数组作为参数，例子2表明还可以接收类似数组的对象作为参数。

同时，上面代码也展示了一种去除数据重复成员的方法。

```javascript
[...new Set(Array)]
```

在向Set中加入值的时候，不会发生类型转换，所以5和'5'是两个不同的值。
Set内部判断两个值是否不同，使用的算法叫做“ **Same-value-zero equality** ” ,它类似于精确相等运算符（===）,主要区别是
 **NaN** 等于自身，而精确相等运算符任务 **NaN** 不等于自身。

 ```javascript 
 let set = new Set();
 let a  = Nan;
 let b  = Nan;
 set.add(a);
 set.add(b);
 set;// Set {Nan}
 ```

两个对象总是不相等的。

```javascript
let set = new Set();

set.add({});
set.size;//1

set.add({});
set.size;//2
```

上面代码表示，两个空对象不相等，它们被视为两个值。



## Set实例的属性和方法

