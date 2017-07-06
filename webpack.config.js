var path = require('path');
var webpack = require('webpack');  //加载webpack依赖包
module.exports = {
    entry: path.resolve(__dirname, './javascripts/src/app.js'),  
    //入口文件并添加了热加载
    output: {
        path: path.resolve(__dirname, './static/react'),
        filename: 'glamorgan.js'  //输出文件
    },
    module: {
        loaders: [
            {
                test: /\.js?$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel-loader',
                include: [
                path.resolve(__dirname)
                // path.resolve(__dirname, "app")
                // APP_DIR
                ],
                // query: {
                //     presets: ['es2015', 'react']
                // } //将react编译成js文件
            },
            { test: /\.css$/, loader: 'style-loader!css-loader' }, 
            //打包css文件
            { test: /\.scss$/, loader: 'style-loader!css-loader!sass-loader?sourceMap'}, 
            //编译sass文件
            { test: /\.(png|jpg)$/, loader: 'url-loader?limit=8192'} 
            //对图片进行打包
        ]
    },
    resolve: {
        //自动扩展文件后缀名
        extensions: ['.js', '.json', '.scss', '.ts']
    }
};
