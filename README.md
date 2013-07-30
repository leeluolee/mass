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


## 文档目录

1. [__css3.mcss__](#css3)[(源码)](https://github.com/leeluolee/mass/blob/master/mass/css3.mcss)      —— 提供海量的css3的兼容处理(由于mcss的强大特性，其实没写多少代码)
2. [__reset.mcss__](#reset)[(源码)](https://github.com/leeluolee/mass/blob/master/mass/reset.mcss)       —— 提供多种reset函数, nec-reset, normalize ... etc
3. [__helper.mcss__](#helper)[(源码)](https://github.com/leeluolee/mass/blob/master/mass/helper.mcss)      —— 提供一些常用帮助函数，比如$clearfix等等
4. [__layout.mcss__](#layout)[(源码)](https://github.com/leeluolee/mass/blob/master/mass/layout.mcss)      —— 提供一些布局相关函数
5. [__effect.mcss__](#effect)[(源码)](https://github.com/leeluolee/mass/blob/master/mass/effect.mcss)      —— 提供一些常用的animation mixin, 并提供参数控制.
6. [__functions.mcss__](#functions)[(源码)](https://github.com/leeluolee/mass/blob/master/mass/functions.mcss)   —— 一些函数集合, mass的每个文件都或多或少依赖了这个函数
7. index.mcss[(源码)](https://github.com/leeluolee/mass/blob/master/mass/index.mcss)      —— 以上所有子文件的入口文件, 你偷懒可以只引入这个文件

__需要注意的是__ : mass中的所有文件都可以单独引入, 已经处理好了依赖关系。


<a name="doc"></a>
## 使用文档
源码请看对应文件

<a name="css3"></a>
### 1. [css3.mcss](https://github.com/leeluolee/mass/blob/master/mass/css3.mcss)

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

其它例如`$box-sizing`之类的也是一致,详细列表[`css3.file:L12`](https://github.com/leeluolee/mass/blob/master/mass/css3.mcss#L12)

* transition (webkit moz),
* transition-delay (webkit moz),
* transition-property (webkit moz),
* transition-duration (webkit moz),
* transition-timing-function (webkit moz),
* animation (webkit moz), 
* animation-delay (webkit moz), 
* animation-name (webkit moz), 
* animation-direction (webkit moz), 
* animation-duration (webkit moz), 
* animation-fill-mode (webkit moz), 
* animation-iteration-count (webkit moz), 
* animation-timing-function (webkit moz), 
* columns (webkit moz),
* column-count (webkit moz),
* column-gap (webkit moz),
* column-fill (webkit moz),
* column-rule (webkit moz),
* column-rule-color (webkit moz),
* column-rule-style (webkit moz),
* column-rule-width (webkit moz),
* column-span (webkit moz),
* column-width (webkit moz),
* box-orient (webkit moz),
* box-sizing (webkit moz),
* box-pack (webkit moz),
* box-align (webkit moz),
* box-direction (webkit moz),
* box-lines (webkit moz),
* box-ordinal-group (webkit moz),
* box-flex (webkit moz),
* box-flex-group (webkit moz),
* box-shadow (webkit moz),
* transform null,
* transform-origin null,
* transform-style null,
* perspective (webkit moz),
* perspective-origin (webkit moz),
* appearance (webkit moz ms o),
* backface-visibility (webkit moz),
* background-clip webkit,
* background-origin webkit,
* background-size webkit,
* border-box (webkit moz),
* box-shadow webkit,
* user-select (webkit moz ms),
* hyphens (epub moz ms),
* filter (moz webkit);

__所有以上css3的参数与原样式一致__


#### $border-radius($radius, $direction)
`$border-radius` 除了处理前缀, 可以传入额外参数控制位置, 

__Arguments__
1. $radius —— 圆角半径
2. $direction —— (可选) 圆角的位置 可以是角(top left) 也可以是边(top)

__Example__

```
.radius{
  $border-radius: 3px;
}
.radius-corner{
  $border-radius: 3px, top left;
}
.radius-side{
  $border-radius: 3px, top;
}
```

__Outport__

```
.radius{
  -moz-border-radius:3px;
  border-radius:3px;
}
.radius-corner{
  -moz-border-top-left-radius:3px;
  border-top-left-radius:3px;
}
.radius-side{
  -moz-border-top-left-radius:3px;
  border-top-left-radius:3px;
  -moz-border-top-right-radius:3px;
  border-top-right-radius:3px;
}
```



#### $linear-gradient = ($pos, $color-stops...)
线型渐变

__Argument__

__Exmaple__

__Outport__


#### $radial-gradient = ($color-stops...) 
圆形渐变, 目前只支持

__Argument__

__Exmaple__

__Outport__


#### $keyframes = ($name, $block)
兼容浏览器的keyframs写法, 与@keyframes对应, mass同时利用它封装了[`effect.mcss`](https://github.com/leeluolee/mass/blob/master/mcss/effect.mcss)

__Arguments__ 
1. $name  —— keyframes 名称
2. $block —— 传入的block函数, 这个函数接受的第一个参数是前缀, 大部分情况你不需要这个参数, 比如 `-o-`, `-webkit-`

__Example__

```
$block =  ($prefix){
    /* 运算级与js一致， 所以利于逻辑符可以减少一些@if 的书写*/
    20%{
        #{$prefix}transform: scale(2.0,2.0);
    }
    to{
        #{$prefix}transform: scale(1.0,1.0);
    }
}

$keyframes(hello, $block);
```

__Outport__

```css
@-webkit-keyframes hello{
  20%{
    -webkit-transform:scale(2,2);
  }
  to{
    -webkit-transform:scale(1,1);
  }
}
@-moz-keyframes hello{
  20%{
    -moz-transform:scale(2,2);
  }
  to{
    -moz-transform:scale(1,1);
  }
}
@-o-keyframes hello{
  20%{
    -o-transform:scale(2,2);
  }
  to{
    -o-transform:scale(1,1);
  }
}
@keyframes hello{
  20%{
    transform:scale(2,2);
  }
  to{
    transform:scale(1,1);
  }
}
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
```

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


<a name="reset"></a>
### 2. [reset.mcss](https://github.com/leeluolee/mass/blob/master/mass/reset.mcss)



<a name="helper"></a>
### 3. [helper.mcss](https://github.com/leeluolee/mass/blob/master/mass/helper.mcss)
helper主要提供一些类似 $clearfix的帮助函数,帮助处理一些兼容性问题, 或者集合缩写

#### $clearfix
清除浮动, 采用的是[NEC](http://nec.netease.com)的方式, 这应该是最常用的mixin

__Example__
```
.container{
  $clearfix();
}
```

__Outport__
```css
.container{
  *zoom:1;
}
.container:before,.container:after{
  display:table;
  content:"";
  line-height:0;
}
.container:after{
  clear:both;
}
```


#### $display($type)
display处理了有关display的兼容性问题, 比如inline-box, box.

__Example__:

```css
body{
  $display: inline-block;
}
p{
  $display: box;
}

```

__Outport__:

```
body{
  display:inline-block;
  vertical-align:baseline;
  zoom:1;
  *display:inline;
  *vertical-align:auto;
}
p{
  display:-webkit-box;
  display:-moz-box;
  display:box;
}
```



<a name="layout"></a>
### 4. [layout.mcss](https://github.com/leeluolee/mass/blob/master/mass/layout.mcss)




<a name="effect"></a>
### 5. [effect.mcss](https://github.com/leeluolee/mass/blob/master/mass/effect.mcss)



<a name="functions"></a>
### 6. [functions.mcss](https://github.com/leeluolee/mass/blob/master/mass/functions.mcss)




<a name="index"></a>
### 7. [index.mcss](https://github.com/leeluolee/mass/blob/master/mass/index.mcss)

可以调用以上所有函数



## Changelog




