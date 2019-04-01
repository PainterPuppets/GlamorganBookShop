# GlamorganBookShop

## 关于这个项目
本项目使用 django + react 框架写成

### 关于django
 - django是一个用python写的热门web框架，适合搭建各种中小型网站。开发起来简单顺手，配合django-rest-framework可以快速搭建rest api服务器
 - 目录下的manage.py文件是管理django项目的入口
 - django的一些命令
 - `python manage.py runserver ip:port` // 用于打开服务器
 - `python manage.py makemigrations` // 根据代码生成migration文件
 - `python manage.py migrate` // 根据mogration文件去更改数据库结构
 - `python manage.py createsuperuser` // 创建超级管理员账号(super user)


### 关于react
 - react是由facebook公司开发的前端MVVM框架。
 - react主要代码由js写成，通过react框架本身的代码渲染为html中的dom结构
 - 目录下javascript文件夹下为react相关的代码
 - react使用NPM作为包管理工具
 - 目录下package.json中记录了一些依赖文件和常用脚本
 - NPM相关命令
 - `npm install` // 下载依赖文件
 - `npm run build` // 通过webpack将react代码打包到一起

## How to run project
 - note: python:2.7
 - `npm install` // install react dependencies
 - `npm run build` // webpack build react code 
 - `pip install -r requirements.txt` // install backend dependencies
 - `python manger.py runserver 127.0.0.1:8000` // satrt server
 - congratulation! you can access 127.0.0.1:8000 


## 关于目录结构
 - `book文件夹`:  存放和书籍相关的一些逻辑（创建书籍/获取书籍列表）（每个文件夹下的内容大同小异，其他（borrow/users）雷同）
   - `book/api/`: 存放api（开放接口）相关的逻辑
     - `book/api/serializers.py`: 将数据序列化为json格式的相关代码
     - `book/api/views.py`: api的逻辑都放在这里
   - `book/migrations/`: 存放数据库更改相关的逻辑，django自动生成的，不必在意。
   - `book/admin.py`: admin页面里书籍管理部分的逻辑
   - `book/models.py`: 书籍的数据库相关结构放在这里
 - `borrow文件夹`： 存放和借阅相关的一些逻辑（借阅书籍/归还书籍/获取借阅记录）
 - `users文件夹`：存放和用户信息相关的一些逻辑（登录/登出）
 - `config文件夹`： 存放和项目配置相关的一些代码，大部分为django自己生成的
 - `javascript文件夹`： 前端react代码，存放了一些javascript文件
 - `node_modules文件夹`： 前端依赖文件，主要是一些第三方库
 - `static文件夹`： 一些静态资源的存储位置，比如书籍封面之类的会存放在这里
 - `templates文件夹`： 只有一个html文件，这个html是网站的入口
 - `.babelrc`: 一个用于将react转换为ie可执行代码的工具，可以无视
 - `.gitignore`: git（版本控制软件）的一些配置，可以无视
 - `db.sqlite3`: 项目中用到的数据库，存放各种数据
 - `manage.py`： django的入口文件，用于管理后端服务器
 - `package.json`： 前端的配置文件，内容主要是前端依赖的第三方库
 - `README.md`: 介绍文件，可以无视
 - `requirements.txt`: 后端的依赖列表
 - `webpack.config.js`: 前端打包相关的配置，主要作用是将react源代码打包为一个小型文件