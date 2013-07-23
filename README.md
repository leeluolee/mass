## mass 
mass a css toolbox based on [ __mcss(The new css preprocessor)__ ](https://github.com/leeluolee/mcss)

mass提供大量的函数, 同时也是mcss的官方使用示例.

## 使用

### 1. 安装mcss
首先,确保你安装了nodejs 和 npm.

```shell
npm install -g mcss
```


### 2. 引入mass库

__直接import__ : 

mcss可以依赖远程mcss文件, (只要进程不退出, 远程文件会缓存在内存中, 比如开启了watch参数，这样只会在第一次build中会有载入开销), 我们可以很方便的引用网络上的mcss文件
```css
/* mass入口文件 */
@import 'https://rawgithub.com/leeluolee/mass/master/mass/index.mcss';

/* 此时你就可以使用mass的函数了 */
.m-home{
  $transition: all .1s ease-in-out; 
}
```


__本地使用时，你也可以将mass加入到你的include path__(配置文件或命令),
```
mcss --include path/to/mass_dir
```
 然后就只需要`@import`短名了

```css
@import 'mass/css3';
@import 'mass/helper';
```


## mass的文件列表
主要是libs与mass两个目录

``` 
├─ libs/                 —— 放置内置函数扩展 (未做)
│   └──...
├─ mass/                 —— 放置mcss文件的目录最好与库同名
│   ├─ css3.mcss        —— 提供海量的css3的兼容处理(由于mcss的强大特性，其实没写多少代码)
│   ├─ reset.mcss       —— 提供多种reset函数, nec-reset, normalize ... etc
│   ├─ hepler.mcss      —— 提供一些常用帮助函数，比如$clearfix等等
│   ├─ layout.mcss      —— 提供一些布局相关函数
│   ├─ functions.mcss   —— 一些函数集合, mass的每个文件都或多或少依赖了这个函数
│   ├─ effect.mcss      —— 提供一些常用的animation mixin, 并提供参数控制.
│   └─ index.mcss       —— 以上所有子文件的入口文件, 你偷懒可以只引入这个文件
└─ ....
```

__需要注意的是__ : mass中的所有文件都可以单独引入, 已经处理好了依赖关系。


<a name="doc"></a>
## 使用文档
源码请看对应文件

###  css3

css3主要是帮助我们无痛的使用css3特性,

#### 同名vendor prefixr:

一些简单的vendor prefix占据了css3处理的大部分，参考的是这个在维护中的[css浏览器实验列表](http://peter.sh/experiments/vendor-prefixed-css-property-overview/)

__Example__

```css
.u-btn{
  /* 注意mcss同时支持两种函数调用方式 */
  $transition: background-color 0.1s ease-in-out;
  $box-sizing(border-box)
}

```
__Outport__

```css
.u-btn{
  -webkit-transition:background-color 0.1s ease-in-out;
  -moz-transition:background-color 0.1s ease-in-out;
  transition:background-color 0.1s ease-in-out;
  -webkit-box-sizing:border-box;
  -moz-box-sizing:border-box;
  box-sizing:border-box;
}
```

其它例如`$box-sizing`之类的也是一致,详细列表请看[`css3.file:L12`](https://github.com/leeluolee/mass/blob/master/mcss/css3.mcss#L12) 的 `$prefix-properties`变量, __你一眼就能看懂, 并发现mcss相较于其他预处理的巨大优势__


__所有简单vendor prefixr 的参数与原样式一致 __


#### $border-radius($radius, $direction)
`$border-radius` 除了处理前缀, 可以传入额外参数控制位置, 例如top left;

__Example__

```
@import 'https://rawgithub.com/leeluolee/mass/master/mcss/index.mcss';

.u-btn{
  $border-radius: 3px;
  $border-radius: 3px, top left;
}
```

__Outport__

```
.u-btn{
  -moz-border-radius:3px;
  border-radius:3px;
  -moz-border-top-left-radius:3px;
  border-top-left-radius:3px;
}
```

#### $radial-gradient = ($color-stops...) 
圆形渐变, 目前只支持

__Argument__

__Exmaple__

__Outport__


#### $linear-gradient = ($pos, $color-stops...)
线型渐变

__Argument__

__Exmaple__

__Outport__

#### $keyframes = ($name, $block)
兼容的keyframs写法, 与@keyframes对应, mass同时利用它封装了[`effect.mcss`](https://github.com/leeluolee/mass/blob/master/mcss/effect.mcss)

__Arguments__ 
1. $name  —— keyframes 名称
2. $block —— 传入的block函数, 这个函数接受的第一个参数是前缀, 大部分情况你不需要这个参数

__Example__

```
$block =  ($prefix){
    20%{
        left: 20px;
    }
    to{
        left: 40px;
    }
}

$keyframes(hello, $block);
```

__Outport__

```css
$keyframes(hello, {
    20%{
        left: 20px;
    }
    to{
        left: 40px;
    }
});
```



#### $placeholder ($block)  

控制placeholder的样式

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

#### $hidpi = ($block, $ratio = 1.5)
由于处理高dpi的media query的兼容性问题

__Arguments__

1. $block -- 传入@media中的block
2. $ratio —— device-pixel-ratio 默认1.5


__Example__ 

```
$hidpi({
    body{
        left: 10px;
    }
    p{
        right: 20px;
    }
}, 2.0)

```

__Outport__
```
@media only screen and (-webkit-min-device-pixel-ratio: 2),
  only screen and (min--moz-device-pixel-ratio: 2),
  only screen and (-o-min-device-pixel-ratio: 2/1),
  only screen and (min-resolution: 192dpi),
  only screen and (min-resolution: 2dppx){
  body{
    left:10px;
  }
  p{
    right:20px;
  }
}

```



### Helper.mcss
helper主要提供一些类似 $clearfix的帮助函数,帮助处理一些兼容性问题, 或者集合缩写

#### $display :
display处理了有关display的兼容性问题, 比如inline-box, box.

```css
body{
  $display: inline-block;
}
p{
  $display: box;
}

```
输出







