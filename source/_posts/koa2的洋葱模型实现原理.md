---
title: koa2的洋葱模型实现原理
date: 2019-08-30 15:33:51
tags:
categories:
  - Node
---

原先对 koa 的认知停留在使用上面，最近在阅读 koa2 的源码，发现 koa2 的洋葱模型实现原理很简单，核心代码在 koa-compose 里面，竟然只有几十行：

<!-- more -->

![koa.png](https://i.loli.net/2019/08/30/iXJSKjHFETf81yn.png)

```javascript
function compose(middleware) {
  if (!Array.isArray(middleware))
    throw new TypeError('Middleware stack must be an array!');
  for (const fn of middleware) {
    if (typeof fn !== 'function')
      throw new TypeError('Middleware must be composed of functions!');
  }

  return function(context, next) {
    // last called middleware #
    let index = -1;
    return dispatch(0);
    function dispatch(i) {
      if (i <= index)
        return Promise.reject(new Error('next() called multiple times'));
      index = i;
      let fn = middleware[i];
      if (i === middleware.length) fn = next;
      if (!fn) return Promise.resolve();
      try {
        return Promise.resolve(fn(context, dispatch.bind(null, i + 1)));
      } catch (err) {
        return Promise.reject(err);
      }
    }
  };
}
```

其中，compose 函数，负责处理注册的所有中间件，我们使用以下方式注册中间件（middleware）

```javascript
app.use(async (ctx, next) => {
  // code
  await next();
  // code
});
app.use(async (ctx, next) => {
  // code
  await next();
  // code
});
```

那么，koa2 是如何处理注册的中间件，并实现它的洋葱模型呢？
koa2 会将注册的所有中间件函数，放在数组 middleware 中，使用 koa-compose,处理 moddleware 这个数组。

下面就是对 compose 函数的解析。

```javascript
function compose(middleware) {
  //  容错判断，如果middleware不是数组，或者元素不是函数，则抛异常
  if (!Array.isArray(middleware))
    throw new TypeError('Middleware stack must be an array!');
  for (const fn of middleware) {
    if (typeof fn !== 'function')
      throw new TypeError('Middleware must be composed of functions!');
  }

  // compose函数最终返回一个闭包函数
  return function(context, next) {
    // last called middleware #
    let index = -1;
    return dispatch(0);
    // 使用递归操作，将各个function作为前一个function的next参数传递过去
    function dispatch(i) {
      if (i <= index)
        return Promise.reject(new Error('next() called multiple times'));
      index = i;
      let fn = middleware[i];
      if (i === middleware.length) fn = next;
      if (!fn) return Promise.resolve();
      try {
        return Promise.resolve(fn(context, dispatch.bind(null, i + 1)));
      } catch (err) {
        return Promise.reject(err);
      }
    }
  };
}
```
