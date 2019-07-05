---
title: Set数据结构
date: 2018-09-26 19:39:33
header-img: 'post-bg-js-version.jpg'
tags:
  - 前端开发
  - JavaScript
categories:
  - 前端
  - JavaScript
---

# Set

[TOC]

## 基本用法

ES6 提供了新的数据接口 **Set**。它类似于数组，但是成员的值都是唯一的，没有重复的值。

Set 本身是一个构造函数，用于生成 Set 数据接口。

```javascript
const s = new Set();

[1, 2, 2, 4, 5, 3].forEach(item => s.add(item));

for (let i of s) {
  console.log(i);
}
// 1 2 4 5 3
```

上面代码通过 **add** 方法向 Set 结构添加成员，结果表明 Set 结构不会添加重复的值。

Set 函数可以接受一个数组（或者具有 iterable 接口的其他数据结构） 作为参数，用来初始化。

```javascript
// demo1
const set = new Set([1, 2, 3, 4, 4]);
[...set]; // [1,2,3,4]

// demo2
const items = new Set([1, 2, 3, 4, 5, 5, 5, 5]);
items.size; // 5

// demo3
const set = new Set(document.getElementsByClassName('red'));
set.size; // 4

// demo4
const set = new Set();
document.getElementsByClassName('red').forEach(item => set.add(item));
set.size; // 4

// 去除数组重复成员的方法
[...new Set(array)];

// 去除数组重复成员的方法2
Array.from(new Set(array)); // Array.from方法可以将Set结构转为数组。
```

向 Set 加入值的时候，不会发生类型转换。 5 和 “5”是不同的值。Set 内部判断两个值是否相等，使用的算法叫做 “**Same-value-zero equality**” , 类似于精确相等运算符（**===**），主要区别是 **NaN**等于自身，而精确运算符认为**NaN**不等于自身。

```javascript
let set = new Set();
let a = NaN;
let b = NaN;
set.add(a);
set.add(b);
set; // Set {NaN}
```

两个对象总是不相等的

```;
let set = new Set();

set.add({});
set.size; // 1

set.add({});
set.size; // 2
```

## Set 的实例属性和方法

Set 结构的实例有一下属性。

- **Set.prototype.constructor **: 构造函数，默认就是 Set 函数
- **Set.prototype.size **: 返回 Set 实例的成员总数

Set 实例的方法分为两大类：操作方法和遍历方法。

### 4 个操作方法

- **add(value)** : 添加某个值，返回 Set 结构本身
- **delete(value)** : 删除某个值，返回一个布尔值，表示是否删除成功。删除一个不存在的值，返回 false
- **has(value)** : 返回一个布尔值，表示该值是否为 Set 成员
- **clear()** : 清除所有成员，没有返回值

```javascript
let s = new Set();

s.add(1)
  .add(2)
  .add(2);

s.size; // 2

s.has(1); // true
s.has(2); // true
s.has(3); // false

s.delete(2); // true
s.has(2); // false
```

### 4 个遍历操作

- **keys()** : 返回键名的遍历器

- **values** (): 返回键值的遍历器

- **entries()** : 返回键值对的遍历器

- **forEach()** : 使用回调函数遍历每个成员

Set 的遍历顺序就是插入顺序。

由于 Set 结构没有键名，只有键值（或者说两者相同），所以 keys 方法和 values 方法的行为完全一致。

```javascript
let set = new Set(['red', 'green', 'blue']);

for (let item of set.keys()) {
  console.log(item);
}
// red
// green
// blue

for (let item of set.values()) {
  console.log(item);
}
// red
// green
// blue

for (let item of set.entires()) {
  console.log(item);
}
// ['red', 'red']
// ['green', 'green']
// ['blue', 'blue']

set.forEach((value, key) => {
  console.log(key + ':' + value);
});
// red:red
// green：green
// blue:blue
```

#### 遍历的应用

扩展运算符 **(...)**内部 使用 **for...of**循环，所以也可以用于 Set 结构。

```javascript
let set = new Set([1, 2, 4]);
let arr = [...set];
```

用于去重：

```javascript
let arr = [1, 2, 3, 4, 4];
let unique = [...new Set(arr)];
```

数组的**map** 和 **filter**可以间接用于 Set：

```javascript
let set = new Set([1, 2, 3]);
set = new Set([...set].map(item => item * 2));

let set = new Set([1, 2, 3, 4, 5]);
set = new Set([...set].filter(item => item % 2 == 0));
```

实现并集、交集 和 差集

```javascript
let a = new Set([1,2,3]);
let b = new Set([4,3,2]);

// 并集
let union = new Set([...a, ...b]);

// 交集
let intersect = new Set([...a].filter(item => b.has(item)))

// 差集
let intersect = new Set([...a].filter(item => ！b.has(item)))
```

目前没有办法直接改变 Set 中的值，不过可以通过遍历间接改变 Set 中的值：

```javascript
let set = new Set([1,2,3]);

set = new Set([...set].map(val => val * 2);
set = new Set(Array.from(set).map(val => val * 2));
```
