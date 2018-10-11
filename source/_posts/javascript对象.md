---
title: javascript对象
date: 2018-10-08 18:53:41
tags:
---





- 可写 writable

- 可枚举 enumerable

- 可配置 configurable



  在ECMAScript 5之前，通过代码给对象创建的所有属性都是可写，可枚举，可配置的。



- 对象的原型 prototype
- 对象的类 class
- 对象的扩展标记 extensible flag ， 指明了是否可以向改对象添加新属性



- 内置对象

  数组，函数，日期，正则表达式等

- 宿主对象

- 自定义对象

- 自有属性

- 继承属性



- 创建对象

  对象直接量，关键字new，和 Object.create() (来自ECMAScript 5)

- 对象直接量

  属性名可以是javascript的标识符也可以是字符串直接量（包括空字符串）。属性值可以是任意类型的javascript表达式。

  属性名如果是保留字或包含特殊字符，需要用引号引起来。（ES3中）

- 通过new创建对象

- Object.create()




- 原型

  每一个javascript对象（null 除外），都和另一个对象相关联。“另一个”对象就是原型，每一个对象都从原型继承属性。

  所有通过对象直接量创建的对象都具有同一个原型对象，并且可以通过 **Object.prototype**获得对原型对象的引用。通过new 和构造函数调用创建的对象的原型就是构造函数的**prototype**属性的值。因此，同使用**{}**一样，new Object() 创建的对象继承自Object.prototype,new Array()继承自Array.prototype,new Date()的原型是 Date.prototype

  没有原型的对象为数不多，Object.prototype就没有原型，它不继承任何属性。其他原型对象都是普通对象。

  Date.prototype 的属性继承自 Object.prototype



- 序列化和反序列化





- 对象的方法

  toString()

  toLocaleString()

  toJSON()

  valueOf()
