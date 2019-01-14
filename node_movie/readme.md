## node_movie 基于node和mongodb的电影网站

![index](https://github.com/w190768613/Node/blob/master/node_movie/index.png)

## Express框架
Express 是一个简洁而灵活的 node.js Web应用框架, 提供了一系列强大特性帮助你创建各种 Web 应用，和丰富的 HTTP 工具。

使用 Express 可以快速地搭建一个完整功能的网站。

#### Express 框架核心特性：

● 可以设置中间件来响应 HTTP 请求。

● 定义了路由表用于执行不同的 HTTP 请求动作。

● 可以通过向模板传递参数来动态渲染 HTML 页面。

#### 安装 Express 并将其保存到依赖列表中：

```
$ cnpm install express --save
```

以上命令会将 Express 框架安装在当前目录的 node_modules 目录中， node_modules 目录下会自动创建 express 目录。

以下几个重要的模块是需要与 express 框架一起安装的：

● **body-parser** - node.js 中间件，用于处理 JSON, Raw, Text 和 URL 编码的数据。

● **cookie-parser** - 这就是一个解析Cookie的工具。通过req.cookies可以取到传过来的cookie，并把它们转成对象。

● **multer** - node.js 中间件，用于处理 enctype="multipart/form-data"（设置表单的MIME编码）的表单数据。

```
$ cnpm install body-parser --save
$ cnpm install cookie-parser --save
$ cnpm install multer --save
```

#### Express 框架实例
接下来我们使用 Express 框架来输出 "Hello World"。

以下实例中我们引入了 express 模块，并在客户端发起请求后，响应 "Hello World" 字符串。

创建 express_demo.js 文件，代码如下所示：

```
//express_demo.js 文件
var express = require('express');
var app = express();
 
app.get('/', function (req, res) {
   res.send('Hello World');
})
 
var server = app.listen(8081, function () {
 
  var host = server.address().address
  var port = server.address().port
 
  console.log("应用实例，访问地址为 http://%s:%s", host, port)
 
})
```

## Mongodb

MongoDB 是由C++语言编写的，是一个基于分布式文件存储的开源数据库系统。

在高负载的情况下，添加更多的节点，可以保证服务器性能。

MongoDB 旨在为WEB应用提供可扩展的高性能数据存储解决方案。

MongoDB 将数据存储为一个文档，数据结构由键值(key=>value)对组成。MongoDB 文档类似于 JSON 对象。字段值可以包含其他文档，数组及文档数组。

#### 基本操作

● **show dbs** : 查看有几个数据库  
● **use 数据库名** : 选择某个数据库（若不存在，则准备创建该数据库，插入一条数据后创建成功）  
● **db.dropDatabase()** : 删除选择的数据库 

● **show collections** : 查看有几个数据表  
● **db.数据表名.insert({key: value})** : 插入数据  
● **for(i=0;i<100;i++)db.数据表名.insert({key: value})** : 循环插入数据

● **db.数据表名.find()** : 查看数据表的所有内容  
● **db.数据表名.find({key: value})** : 查看数据表的指定内容  
● **db.数据表名.find().count()** : 查看数据表有几条数据量  
● **db.数据表名.find().skip()** : 跳过输出数据，比如skip(1)表示跳过前一条数据，skip(2)表示跳过前两条数据  
● **db.数据表名.find().limit()** : 限制输出数据的数量  
● **db.数据表名.find().sort()** : 排序输出数据，1为正序排序，-1为反序排序，

● **show tables** : 查看数据表  
● **db.数据表名.update({key1: value1},{$set:{key2: newValue})** : 修改所有匹配{key1: value1}的数据，将key2的值修改为newValue  
● **db.数据表名.remove({key: value})** : 删除对应的数据  
● **db.数据表名.drop()** : 删除对应的数据表


## Pug模板引擎

### 什么是模板引擎
将动静部分糅合的一种实现机制或者技术。

### 什么是Pug
Pug是使用JavaScript实现，可供nodejs使用的高性能模板引擎。模板引擎有很多，主要使用比较广泛的是jade和ejs，NodeJs项目默认使用jade作为模板引擎

#### Pug的特点:
● 超强的可读性  
● 灵活易用的缩进  
● 块扩展  
● 代码默认经过编码处理，以增强安全性  
● 编译及运行时的上下文错误报告  
● 命令行编译支持  
● 联合动态的静态标记类  
● 利用过滤器解析树的处理

#### Pug的缺点:  
● 可移植性差  
● 调试困难  
● 性能不是非常出色

### install
To use Pug in your own JavaScript projects:

```
$ npm install pug
```

After installing the latest version of Node.js, install with:

```
$ npm install pug-cli -g
```

and run with

```
$ pug --help
```

## Grunt 构建工具

### 为何要用构建工具？
一句话：自动化。对于需要反复重复的任务，例如压缩、编译、单元测试等，自动化工具可以减轻你的劳动，简化你的工作。

### 安装 Grunt CLI：

全局安装Grunt的命令行接口（CLI）。运行下面的代码：

```
$ npm install -g grunt-cli
```

安装了grunt-cil并不意味着安装了Grunt 任务管理器（task runner）。

Grunt CLI是运行安装在邻近Gruntfile的Grunt版本。这允许了在同一台机器上同时安装不同版本的Grunt。


### 在项目中使用Grunt

#### 1.创建项目根目录

创建项目根目录,且在目录中创建下面的文件：

● package.json : 这是npm使用的文件，用来存储作为npm模块发布的项目的meta数据。  
● cruntfile.js : 这个文件用来设置和定义任务以及加载Grunt插件。

#### 2.在项目中添加Grunt模块

运行如下语句

```
$ npm install grunt --save-dev
```

上述命令安装了Grutn同时也在package,json中创建了一个入口，此入口说明了这个模块将作为devDependency。 

被标记为devDependency的模块只能是在开发环境中安装的模块。在产品环境中安装它们将被忽略。

 

### 理解Gruntfile文件

Gruntfile是一个有效的js或者CooffeeScript文件，放置在项目更目录中，和package.json一起放置。 

一个Gruntfile文件包含下面几个部分：

1.包裹（wrapper）函数  
2.项目和任务配置  
3.Grunt插件和任务  
4.典型任务（custom tasks）


### 包裹（wrapper）函数

wrapper函数是指定到module exports上的封装所有Grunt代码的函数。这个函数被Grunt引擎调用，并且作为Grunt配置的入口点。

我们的Gruntfile看起来如下：

```
module.exports = function(grunt) {
  // Do grunt-related things in here
};
```

所有的Gruntfile和Grunt 插件使用上述基本形式，且你所有的Grunt代码必须写在函数中


### Gruntfile中的项目和任务配置

大多数的Grunt任务依赖于赋值到grunt.initConfig方法上的对象中的配置数据。 

定义一些随机的配置参数：

```
module.exports = function(grunt) {
  // Project configuration.
  grunt.initConfig({
    //Lets read the project package.json
    pkg: grunt.file.readJSON('package.json'),
    //Some other configs
    someKey: 'Some Value',
    author: 'Modulus.io'
  });
};
```


### Grunt插件和任务

许多任务比如concatenation，minificationhe linting对于Grunt插件而言是可用的，只要你在安装npm的时候在package.js中将插件定义成dependency，那么就可以在Gruntfile内部使用。

安装一个简单的插件grunt-clean

```
$ npm install grunt-contrib-clean --save-dev
```

配置Gruntfile文件如下：

```
module.exports = function (grunt) {
  // Project configuration.
  grunt.initConfig({
    //Lets read the project package.json
    pkg: grunt.file.readJSON('package.json'),
    //Some other configs
    someKey: 'Some Value',
    author: 'Modulus.io',
    filePostfix: '-<%= pkg.name %>-<%= pkg.version %>',
    greetingMessage: 'Running Grunt for project: <%= pkg.name %>, Version: <%= pkg.version %>, Author: <%= author %>',

    //Configure Clean Module
    clean: ['.tmp', 'dist', 'npm-debug.log']
  });

  // Load the plugin that provides the "clean" task.
  grunt.loadNpmTasks('grunt-contrib-clean');

};
```


在上面的例子中，我们配置 clean 来删除 .tmp和dist文件夹以及项目根文件的npm-debug.log文件。


现在，在项目根目录下面尝试运行以下代码：

```
$ grunt clean
```

这个命令用来删除特定的文件和配置的文件

 
