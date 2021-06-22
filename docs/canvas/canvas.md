---
sidebar_position: 1
---


# canvas

```html
<canvas id="canvas" width="200" height="160"style="border:1px dashed gray"></canvas>
```

Canvas是一个行内块元素(inline-block),一般需要指定3个属性id,width,height。默认宽300px，高150px。

如果在CSS样式中定义，Canvas元素的宽度和高度是默认值，而不是所定义的宽度和高度，这样我们就无法获取Canvas元素正确的宽度和高度。因此对于Canvas元素的宽度和高度，我们一定要在HTML属性中定义，而不是在CSS样式中定义。

**canvas的常用属性和方法：**
- width
- height
- getContext('2d')
- toDataURL()



## 直线

```javascript
ctx.moveTo(x1, y1);
ctx.lineTo(x2,y2)
cxt.stroke();
```
## 描边矩形
```javascriptnpm 
ctx.strokeStyle = "red";
ctx.strokeRect(x1,y1,width,height)
```
## 填充矩形
```javascript
ctx.fillStyle = "red";
ctx.fillRect(x1,y1,width,height)
```
## 使用rect方法画矩形
```javascript
ctx.strokeStyle = "red"
cxt.rect(x1,y1,width,height)
ctx.stroke()

// 或者
ctx.fillStyle = "red"
cxt.rect(x1,y1,width,height)
ctx.fill()
```
用strokeRect()、fillRect()和rect()这3种方法都可以画矩形。这3种方法的参数设置是相同的，不同之处在于实现效果。其中，strokeRect()和fillRect()这两个方法在被调用之后，会立即把矩形绘制出来。而rect()方法在被调用之后，并不会立即把矩形绘制出来。只有在使用rect()方法之后再调用stroke()或fill()方法，才会把矩形绘制出来。

## 清空矩形
```javascript
ctx.clearRect(x,y,width,height)
```