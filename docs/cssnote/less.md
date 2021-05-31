---
sidebar_position: 1
---

# Less

![less](https://less.bootcss.com/public/img/less_logo.png)

## 变量(Variables)

用作变量值

```less
@width: 10px;
@height: @width + 10px;

#header {
  width: @width;
  height: @height;
}
```

用作选择器

```less
// Variables
@my-selector: banner;

// Usage
.@{my-selector} {
  font-weight: bold;
  line-height: 40px;
  margin: 0 auto;
}
```

用作 URL

```less
// Variables
@images: "../img";

// Usage
body {
  color: #444;
  background: url("@{images}/white-sand.png");
}
```

用在 import 语句上

```less
@themes: "../../src/themes";
@import "@{themes}/wave.less";
```

用在属性名上

```less
@property: color;

.widget {
  @{property}: red;
  background-@{property}: #999;
}
```

用在动态变量上

```less
@primary: green;
@secondary: blue;

.section {
  @color: primary; // 注意这边没有@
  @color2: @primary;

  .element {
    color: @@color;
  }
  .div {
    color: @color2;
  }
}
```

延迟计算

```less
.lazy-eval {
  width: @var;
}

@var: @a;
@a: 9%;
```

作用域

```less
@var: 0;
.class {
  @var: 1;
  .brass {
    @var: 2;
    three: @var;
    @var: 3;
  }
  one: @var;
}
```

上述编译结果:

```css{
  .class{
    one: 1;
  }
  .class .brass{
    three: 3
  }
}
```

```less
.header {
  --color: white;
  color: var(--color); // the color is black
  --color: black;
}
```

使用`$prop`语法轻松地将属性视为变量

```less
.widget {
  color: #efefef;
  background-color: $color;
}
```

```less
.block {
  color: red;
  .inner {
    background-color: $color;
  }
  color: blue;
}
```

## 混合（Mixins）

```less
.bordered {
  border: 1px;
}

.menu a {
  color: red;
  .bordered();
}

.post a {
  .bordered();
}
```

## 嵌套（Nesting）

```less
#header {
  color: black;
  .nav {
    font-size: 12px;
  }
  /**
  * &表示当前选择器的上级
  */
  &:after {
    content: " ";
    display: block;
    font-size: 0;
    height: 0;
    clear: both;
    visibility: hidden;
  }
}
```

## 运算(Operations)
