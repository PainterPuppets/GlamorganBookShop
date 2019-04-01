# GlamorganBookShop

## 关于这个项目
本项目使用 django + react 框架写成

### 关于django
 - django是一个用python写的热门web框架，适合搭建各种中小型网站。开发起来简单顺手，配合django-rest-framework可以快速搭建rest api服务器
 - 目录下的manage.py文件是管理django项目的入口
 - django的一些命令
 - python manage.py runserver ip:port // 用于打开服务器
 - python manage.py makemigrations // 根据代码生成migration文件
 - python manage.py migrate // 根据mogration文件去更改数据库结构
 - python manage.py createsuperuser // 创建超级管理员账号(super user)


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

## TODO:
 - add give back action & frontend
 - romove duplicate code
