---
sidebar_position: 1
---

# Less

## 变量
```less
@width: 10px;
@height: @width + 10px;

#header {
  width: @width;
  height: @height;
}
```

## 混合（Mixins）
```less
.bordered{
  border: 1px
}

.menu a{
  color:red;
  .bordered();
}

.post a{
  .bordered()
}
```

## 嵌套（Nesting）
```less
#header{
  color:black;
  .nav{
    font-size:12px;
  }
  /**
  * &表示当前选择器的上级
  */
  &:after{
  content: " ";
    display: block;
    font-size: 0;
    height: 0;
    clear: both;
    visibility: hidden;
  }
}
```