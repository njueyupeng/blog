(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[261],{3905:function(e,n,t){"use strict";t.d(n,{Zo:function(){return p},kt:function(){return d}});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=r.createContext({}),u=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=u(e.components);return r.createElement(l.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),m=u(t),d=a,f=m["".concat(l,".").concat(d)]||m[d]||s[d]||o;return t?r.createElement(f,i(i({ref:n},p),{},{components:t})):r.createElement(f,i({ref:n},p))}));function d(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=m;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var u=2;u<o;u++)i[u]=t[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},1649:function(e,n,t){"use strict";t.r(n),t.d(n,{frontMatter:function(){return i},metadata:function(){return c},toc:function(){return l},default:function(){return p}});var r=t(2122),a=t(9756),o=(t(7294),t(3905)),i={slug:"loadingAnimation",title:"\u5f39\u8df3\u52a0\u8f7d\u52a8\u753b",author:"Yu Peng",author_title:"FE Developer",author_url:"https://github.com/njueyupeng",author_image_url:"https://avatars.githubusercontent.com/u/13177502?s=60&v=4",tags:["css"]},c={permalink:"/blog/loadingAnimation",editUrl:"http://how2js.cn/blog/2019-11-22-animation.md",source:"@site/blog/2019-11-22-animation.md",title:"\u5f39\u8df3\u52a0\u8f7d\u52a8\u753b",description:"\u521b\u5efa\u53cd\u590d\u52a0\u8f7d\u7a0b\u5e8f\u52a8\u753b\uff1a",date:"2019-11-22T00:00:00.000Z",formattedDate:"November 22, 2019",tags:[{label:"css",permalink:"/blog/tags/css"}],readingTime:.3,truncated:!1,nextItem:{title:"Truncation Example",permalink:"/blog/2019/11/22/graph"}},l=[{value:"HTML",id:"html",children:[]},{value:"CSS",id:"css",children:[]}],u={toc:l};function p(e){var n=e.components,t=(0,a.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"\u521b\u5efa\u53cd\u590d\u52a0\u8f7d\u7a0b\u5e8f\u52a8\u753b\uff1a"),(0,o.kt)("h3",{id:"html"},"HTML"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html"},'<div class="bouncing-loader">\n  <div></div>\n  <div></div>\n  <div></div>\n</div>\n')),(0,o.kt)("h3",{id:"css"},"CSS"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-css"},"@keyframes bouncing-loader {\n  from {\n    opacity: 1;\n  }\n}\n.bouncing-loader > div {\n  width: 1rem;\n  height: 1rem;\n  margin: 3rem 0.2rem;\n  background: #8385aa;\n  border-radius: 50%;\n  animation: bouncing-loading 0.6s infinite alternate;\n}\n.bouncing-loader > div:nth-child(2) {\n  animation-delay: 0.2s;\n}\n.bouncing-loader > div:nth-child(3) {\n  animation-delay: 0.4s;\n}\n")))}p.isMDXComponent=!0}}]);