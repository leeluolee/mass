## mass 
mass a css toolbox based on [ __mcss(The new css preprocessor)__ ](https://github.com/leeluolee/mcss)

mass除了提供工具包, 同时也是mcss的扩展库的官方使用案例,

## 使用

### 1. 安装mcss
首先,确保你安装了nodejs 和 npm.
```shell
npm install -g mcss
```


### 2. 引入mass库

__ 远程使用__: 

由于mcss可以依赖远程mcss文件, 利用github的资源库, 我们可以做到远程加载(只要进程不退出, 远程文件会缓存在内存中, 比如开启了watch参数，这样只会在第一次build中会有载入开销)
```css
/* mass入口文件 */
@import 'https://rawgithub.com/leeluolee/mass/master/mcss/index.mcss';

/* 此时你就可以使用mass的mixin函数了 */
.m-home{
  $transition: all .1s ease-in-out; //使用mass提供的mixin或者函数
}
```

__ 本地使用时，你可以将mass加入到你的include path__, 加入include参数: 
```
mcss --include path/to/mass_dir
```
就可以在file中直接使用


### 本地使用:


## mass的文件列表
主要是libs与mass两个目录

``` 
├─ libs/                 —— 放置内置函数扩展 (未做)
│   └──...
├─ mass/                 —— 放置mcss文件的目录最好与库同名
│   ├─ css3.mcss        —— 提供海量的css3的兼容处理(由于mcss的强大特性，其实没写多少代码)
│   ├─ reset.mcss       —— 提供多种reset样式, nec-reset, normalize ... etc
│   ├─ hepler.mcss      —— 提供一些常用帮助mixin，比如$clearfix等等
│   ├─ layout.mcss      —— 提供一些布局相关的mixin, 流式、栅格、x栏自适应的mixin生成
│   ├─ functions.mcss   —— 一些 __函数__, mass的每个文件都或多或少依赖了这个函数
│   ├─ effect.mcss      —— 提供一些常用的animation mixin, 并提供参数控制.
│   └─ index.mcss       —— 以上所有子文件的入口文件, 你偷懒可以只引入这个文件
└─ ....
```

__需要注意的是__ : mass中的所有文件都可以单独引入, 已经处理好了依赖关系。



<a name="doc"></a>
## 使用文档
源码请看对应文件[`css.mcss`]


###  css3

css3主要是帮助我们无痛的使用css3特性,

#### `同名prefixr`:

一些简单的vendor prefix占据了css3处理的大部分，参考的是这个在维护中的[css浏览器实验列表](http://peter.sh/experiments/vendor-prefixed-css-property-overview/)

以`transition` 为例

```css
.u-btn{
  // mcss 支持常规调用 与 隐形调用(transparent call)两种方式调用函数
  $transition: background-color 0.1s ease-in-out;
  $transition(height .1s);
}

```

其它例如`$box-sizing`之类的也是一致,详细列表请看[`css3.file:L12`](https://github.com/leeluolee/mass/blob/master/mcss/css3.mcss#L12) 的 `$prefix-properties`变量, __你一眼就能看懂, 并发现mcss相较于其他预处理的巨大优势__


#### `$display `:
display处理了有关display的兼容性问题, 比如inline-box, box. 这个其实

```

```



#### `$border-radius($radius, $direction)`__ 
`$border-radius` 并没有一并做简单处理, 可以传入额外参数控制位置, 例如top left

```
```

输出
```
```

#### `$placeholder ($block)`  
控制placeholder的样式,

__参数__:
一个block(即无参数的函数);

__示例__:

```
#input1{
  $placeholder({
    color:#090; 
    background:#fff; 
    text-transform:uppercase;
  });
}

// 在最外层调用
$placeholder({
  color:#090; 
  background:#fff; 
  text-transform:uppercase;
});
 
```

__输出__

```css
#input1::-webkit-input-placeholder{
  color:#090;
  background:#fff;
  text-transform:uppercase;
}
#input1::-moz-placeholder{
  color:#090;
  background:#fff;
  text-transform:uppercase;
}
#input1:-moz-placeholder{
  color:#090;
  background:#fff;
  text-transform:uppercase;
}
#input1:-ms-placeholder{
  color:#090;
  background:#fff;
  text-transform:uppercase;
}

::-webkit-input-placeholder{
  color:#090;
  background:#fff;
  text-transform:uppercase;
}
::-moz-placeholder{
  color:#090;
  background:#fff;
  text-transform:uppercase;
}
:-moz-placeholder{
  color:#090;
  background:#fff;
  text-transform:uppercase;
}
:-ms-placeholder{
  color:#090;
  background:#fff;
  text-transform:uppercase;
}




```

<<<<<<< HEAD
=======
https://github.com/LearnBoost/node-canvas/wiki/Installation---Ubuntu
node-canvas 需要手动安装依赖


添加所谓的内省API, 解决leanr-gradient两意使用的关系



## Changelog
__2013年06月29日 12时32分30秒__:
layer的例子，如何定制一个ui. 抽离 共同的成为一个base class, 提取个性成为定制参数
>>>>>>> 8cd846dc03d12dc5479a3585ec5ee5acfa31cc80
