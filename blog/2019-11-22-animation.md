---
slug: loadingAnimation
title: 弹跳加载动画
author: Yu Peng
author_title: FE Developer
author_url: https://github.com/njueyupeng
author_image_url: https://avatars.githubusercontent.com/u/13177502?s=60&v=4
tags: [css]
---


创建反复加载程序动画：

### HTML

```html
<div class="bouncing-loader">
  <div></div>
  <div></div>
  <div></div>
</div>
```

<!--more-->

### CSS

```css
@keyframes bouncing-loader {
  from {
    opacity: 1;
  }
}
.bouncing-loader > div {
  width: 1rem;
  height: 1rem;
  margin: 3rem 0.2rem;
  background: #8385aa;
  border-radius: 50%;
  animation: bouncing-loading 0.6s infinite alternate;
}
.bouncing-loader > div:nth-child(2) {
  animation-delay: 0.2s;
}
.bouncing-loader > div:nth-child(3) {
  animation-delay: 0.4s;
}
```


