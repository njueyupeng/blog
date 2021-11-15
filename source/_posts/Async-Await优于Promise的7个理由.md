---
title: Async-Await优于Promise的7个理由以及其缺点
date: 2021-11-15 13:18:07
tags: 
draft: true
categories: JavaScript
---
async/await 是在NodeJs 7.6 中引入的，目前所有现代浏览器都支持。async/await是Promise之后，ES6引入的另外一个异步解决方案。

<!-- more -->
## async/await 简介
对于目前还未用过async/await的同学，这里先做一个快速介绍

- async/await 是一种编写异步代码的新方法。以前编写异步代码的方案是回调(callback) 和 Promise。
- async/await 实际上只是构建在 promise 之上的语法糖。
- async/await 和 Promise 一样，是非阻塞的。
- async/await 使我们像写同步代码一样去写异步代码。这也正是它出色的地法国。


## 语法

假设一个getJSON函数返回一个Promise，并且该Promise会Resolve一个JSON对象。我们只想调用它并记录该 JSON，我们希望打印这个数据并返回 **"done"**.

Promise的实现方案：

```javascript
const makeRequest = () =>
  getJSON()
    .then(data => {
      console.log(data)
      return "done"
    })

makeRequest()

```

async/await的实现方案
```javascript
const makeRequest = async () => {
  console.log(await getJSON())
  return "done"
}

makeRequest()
```

函数前面加了 async 关键字。await 关键字只能用在 async 函数内部。任何 async 函数都会隐式地返回一个promise,这个 promise 将函数 return 的值作为 resolve的值(也就是例子中的"done"字符串)。

## 为什么 async/await 更好?

### 1. 简洁干净
看看我们没有写多少代码！即使在上面人为设计的示例中，很明显我们节省了大量代码。我们不必编写.then、创建匿名函数来处理响应，data也不必为不需要使用的变量命名。我们还避免了嵌套我们的代码。这些小优势加起来很快，在下面的代码示例中会更加明显。
Look at how much code we didn’t write! Even in the contrived example above, it’s clear we saved a decent amount of code. We didn’t have to write .then, create an anonymous function to handle the response, or give a name data to a variable that we don’t need to use. We also avoided nesting our code. These small advantages add up quickly, which will become more obvious in the following code examples.
从上面的示例代码中我们

Error handling
async/await makes it finally possible to handle both synchronous and asynchronous errors with the same construct, good old try/catch. In the example below with promises, the try/catch will not handle if JSON.parse fails because it’s happening inside a promise. We need to call .catch on the promise and duplicate our error handling code, which will (hopefully) be more sophisticated than console.log in your production-ready code.

```javascript
const makeRequest = () => {
  try {
    getJSON()
      .then(result => {
        // this parse may fail
        const data = JSON.parse(result)
        console.log(data)
      })
      // uncomment this block to handle asynchronous errors
      // .catch((err) => {
      //   console.log(err)
      // })
  } catch (err) {
    console.log(err)
  }
}
```
Now look at the same code with async/await. The catch block now will handle parsing errors.

```javascript
const makeRequest = async () => {
  try {
    // this parse may fail
    const data = JSON.parse(await getJSON())
    console.log(data)
  } catch (err) {
    console.log(err)
  }
}
```

Conditionals
Imagine something like the code below which fetches some data and decides whether it should return that or get more details based on some value in the data.
```javascript
const makeRequest = () => {
  return getJSON()
    .then(data => {
      if (data.needsAnotherRequest) {
        return makeAnotherRequest(data)
          .then(moreData => {
            console.log(moreData)
            return moreData
          })
      } else {
        console.log(data)
        return data
      }
    })
}
```
Just looking at this gives you a headache. It’s easy to get lost in all that nesting (6 levels), braces, and return statements that are only needed to propagate the final result up to the main promise.

This example becomes way more readable when rewritten with async/await.
```javascript
const makeRequest = async () => {
  const data = await getJSON()
  if (data.needsAnotherRequest) {
    const moreData = await makeAnotherRequest(data)
    console.log(moreData)
    return moreData
  } else {
    console.log(data)
    return data    
  }
}
```
Intermediate values
You have probably found yourself in a situation where you call a promise1 and then use what it returns to call promise2, then use the results of both promises to call a promise3. Your code most likely looked like this
```javascript
const makeRequest = () => {
  return promise1()
    .then(value1 => {
      // do something
      return promise2(value1)
        .then(value2 => {
          // do something          
          return promise3(value1, value2)
        })
    })
}
```
If promise3 didn’t require value1 it would be easy to flatten the promise nesting a bit. If you are the kind of person who couldn’t live with this, you could wrap both values 1 & 2 in a Promise.all and avoid deeper nesting, like this

```javascript
const makeRequest = () => {
  return promise1()
    .then(value1 => {
      // do something
      return Promise.all([value1, promise2(value1)])
    })
    .then(([value1, value2]) => {
      // do something          
      return promise3(value1, value2)
    })
}
```
This approach sacrifices semantics for the sake of readability. There is no reason for value1 & value2 to belong in an array together, except to avoid nesting promises.
This same logic becomes ridiculously simple and intuitive with async/await. It makes you wonder about all the things you could have done in the time that you spent struggling to make promises look less hideous.

```javascript
const makeRequest = async () => {
  const value1 = await promise1()
  const value2 = await promise2(value1)
  return promise3(value1, value2)
}
```
Error stacks
Imagine a piece of code that calls multiple promises in a chain, and somewhere down the chain, an error is thrown.

```javascript
const makeRequest = () => {
  return callAPromise()
    .then(() => callAPromise())
    .then(() => callAPromise())
    .then(() => callAPromise())
    .then(() => callAPromise())
    .then(() => {
      throw new Error("oops");
    })
}

makeRequest()
  .catch(err => {
    console.log(err);
    // output
    // Error: oops at callAPromise.then.then.then.then.then (index.js:8:13)
  })
  ```
  
The error stack returned from a promise chain gives no clue of where the error happened. Even worse, it’s misleading; the only function name it contains is callAPromise which is totally innocent of this error (the file and line number are still useful though).
However, the error stack from async/await points to the function that contains the error

```javascript
const makeRequest = async () => {
  await callAPromise()
  await callAPromise()
  await callAPromise()
  await callAPromise()
  await callAPromise()
  throw new Error("oops");
}

makeRequest()
  .catch(err => {
    console.log(err);
    // output
    // Error: oops at makeRequest (index.js:7:9)
  })
  ```
This is not a huge plus when you’re developing on your local environment and have the file open in an editor, but it’s quite useful when you’re trying to make sense of error logs coming from your production server. In such cases, knowing the error happened in makeRequest is better than knowing that the error came from a then after a then after a then …

Debugging
A killer advantage when using async/await is that it’s much easier to debug. Debugging promises has always been such a pain for 2 reasons

You can’t set breakpoints in arrow functions that return expressions (no body).

snippet with chained promisesTry setting a breakpoint anywhere here

If you set a breakpoint inside a .then block and use debug shortcuts like step-over, the debugger will not move to the following .then because it only “steps” through synchronous code.

With async/await you don’t need arrow functions as much, and you can step through await calls exactly as if they were normal synchronous calls.

snippet with consecutive awaits

You can await anything
Last but not least, await can be used for both synchronous and asynchronous expressions. For example, you can write await 5, which is equivalent to Promise.resolve(5). This might not seem very useful at first, but it's actually a great advantage when writing a library or a utility function where you don't know whether the input will be sync or async.

Imagine you want to record the time taken to execute some API calls in your application, and you decide to create a generic function for this purpose. Here's how it would look with promises
const recordTime = (makeRequest) => {
  const timeStart = Date.now();
  makeRequest().then(() => { // throws error for sync functions (.then is not a function)
    const timeEnd = Date.now();
    console.log('time take:', timeEnd - timeStart);
  })
}
view rawrecord-time-promise.js hosted with ❤ by GitHub
You know that all API calls are going to return promises, but what happens if you use the same function to record the time taken in a synchronous function? It will throw an error because the sync function does not return a promise. The usual way to avoid this is wrapping makeRequest() in Promise.resolve()

If you use async/await, you won't have to worry about these cases because await allows you to work safely with any value, promise or not.
const recordTime = async (makeRequest) => {
  const timeStart = Date.now();
  await makeRequest(); // works for any sync or async function
  const timeEnd = Date.now();
  console.log('time take:', timeEnd - timeStart);
}
view rawrecord-time-async.js hosted with ❤ by GitHub
In Conclusion
async/await is one of the most revolutionary features that have been added to JavaScript in the past few years. It makes you realize what a syntactical mess promises are, and provides an intuitive replacement.

Concerns
Some valid skepticism you might have about using async/await is that it makes asynchronous code less obvious: Our eyes learned to spot asynchronous code whenever we see a callback or a .then, it will take a few weeks for your eyes to adjust to the new signs, but C# had this feature for years and people who are familiar with it know it’s worth this minor, temporary inconvenience.


参考文章:

1. [7 Reasons Why JavaScript Async/Await Is Better Than Plain Promises (Tutorial)](https://dev.to/gafi/7-reasons-to-always-use-async-await-over-plain-promises-tutorial-4ej9?utm_source=pocket_mylist)

2. [async和await:让异步编程更简单](https://developer.mozilla.org/zh-CN/docs/Learn/JavaScript/Asynchronous/Async_await)