---
title: '在vue中console.log显示 [__ob__: Observer]的解决方案'
date: 2017-12-12 19:49:51
tags:  
---

我的代码：
```javascript

beforeMount(){
    this.getQueueCpuInfo();
}
mouted(){

},
 methods: {
    getQueueCpuInfo() {
      console.log(Object.keys(this.$store.getters));
      console.log(this.$store.getters.userInfo);
    }
  }
```