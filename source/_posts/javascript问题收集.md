---
title: javascript问题收集
date: 2018-09-21 12:16:19
subtitle: '整理遇到的js小知识点'
header-img: 'post-bg-js-version.jpg'
tags:
  - 前端开发
  - JavaScript
categories:
  - JavaScript
---

1. 值类型和引用类型
2. typeof 运算符

   ```js
   typeof undefined; // 'undefined'
   typeof 'abc'; //'string'
   typeof 123; // 'number'
   typeof true; // 'boolean'
   typeof {}; // 'object'
   typeof []; // 'object'
   typeof null; // 'object'
   typeof console.log; // 'function'
   ```

   > typeof 只能区分值类型的详细类型

3. 变量计算-强制类型转换

   - 字符串拼接
     ```js
     var a = 100 + 10; //110
     var b = 100 + '10'; // '10010'
     ```
   - == 运算符
     ```js
     100 == '100'; // true
     0 == ''; // true
     null == undefined; // true
     ```
   - if 语句

     ```js
     var a = true;
     if (a) {
     }
     var b = 100;
     if (b) {
     }
     var c = '';
     if (c) {
     }
     ```

   - 逻辑运算

     ```js
     10 && 0; //0
     '' || 'abc'; //'abc'
     !window.abc; // true

     // 判断一个变量会被当做 true 还是 false
     var a = 100;
     console.log(!!a);
     ```

4. 何时使用 === 和 ==

   ```js
   if (obj.a == null) {
     // 这里相当于  obj.a === null || obj.a === undefined
     // 这是jquery 源码中推荐的写法
   }
   ```

5. JS 中的内置函数

   - Object
   - Array
   - Boolean
   - Number
   - String
   - Function
   - Date
   - RegExp
   - Error

6. JS 按照存储方式区分变量类型

   值类型 和 引用类型

   区分： 指针 共用内存块

7) 如何理解 JSON

   JSON 是一个 JS 对象 ，同时也是一种数据格式

   ```js
   JSON.parse('{}')
   JSON.stringify)({})
   ```

8) 哪些值会被转换成 false

   ```js
   false;
   0;
   NaN;
   undefined;
   null;
   ```

9) 判断当前代码运行环境是否为严格模式

   ```javascript
   var strict = (function() {
     return !this;
   })();
   ```

   根据 ECMAScript 3 和非严格的 ECMAScript 5 对函数调用的规定，调用上下文（this 的值）是全局对象。然而，在严格模式下，调用上下文则是 undefined。
