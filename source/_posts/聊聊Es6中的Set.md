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

Set结构是实例有以下属性：

- Set.prototype.constructor: 构造函数,默认就是 Set 函数

- Set.prorotype.size: 返回 Set 实例的成员总数

Set实例的方法分为两大类方法：操作方法（用于操作数据）和 遍历方法（用于遍历成员）。

四个操作方法：

    - add(value): 添加某个值，返回 Set 结构本身。
    - delete(value): 删除某个值，返回一个布尔值，表示删除是否成功(删除不存在的值，返回false)。
    - has(value): 返回一个布尔值，表示该值是否为 Set 的成员。
    - clear():清除所有成员，没有返回值。


在判断是否包含一个键上面，Object结构和Set结构的写法是不一样的。

```javascript
//对象的写法
const onject = {
    'width':1,
    'height':1
};
if(object[comeName]){
    // do something
}

//Set 的写法
const s = new Set();

s.add('width');
s.add('height');
if(s.has(someName)){
    //do something
}
```

Array.from 方法可以将Set结构转换为数组。

```javascript
const items = new Set([1,2,3,4,5]);
const array = Array(items);
```

一种去除数组重复成员的另外一种方法：
```javascript
function dedupe(array){
    return Array.from(new Set(array));
}
```


### 遍历操作

Set 结构的实例有四个遍历的方法：

    - keys(): 返回键名的遍历器
    - values(): 返回键值的遍历器
    - entries(): 返回键值对的遍历器
    - forEach(): 使用回调函数遍历每个成员

>> Set 的遍历顺序就是插入的顺序。

####  keys(), values(), entries()

由于Set结构没有键名，只有键值（或者说键名和键值是同一个值），所以 keys 方法和 values 方法 的行为完全一致。

```javascript
let set = new Set(['red','green','blue']);

for(let item of set.keys()){
    console.log(item);
}
// red
// green
// blue

for(let item of set.values()){
    console.log(item);
}
// red
// green
// blue

for(let item of set.entries()){
    console.log(items;
}
// ["red","red"]
// ["green","green"]
// ["blue","blue"]
```


Set结构的实例默认可遍历，它的默认遍历器


