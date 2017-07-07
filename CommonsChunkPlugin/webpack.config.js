/**
 * Created by dy on 2017/6/21.
 */
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');//引入插件
var ExtractCss = new ExtractTextPlugin('css/index.css');//将css文件放入特定的位置
var HtmlWebpackPlugin = require('html-webpack-plugin');//加载html插件

var path = require('path');
module.exports = {
    //entry可以写成对象的形式，其中app为主入口，其他名称可以任意取名比如v：[jquery]
    entry: {
        app: __dirname + '/src/js/index.js',
        more:[__dirname + '/src/js/a.js',__dirname + '/src/js/b.js'],
        v: ['jquery']
    },
    output: {
        path: __dirname + '/assets/',
        filename: 'js/[name].js',
        //publicPath: '/assets/'
    },
    devServer: {
        contentBase: './',
        host: '192.168.10.43',
        port: '2323'
    },
    module: {
        rules: [{
            test: /\.js$/,
            include: path.resolve(__dirname, './src/'),
            exclude: path.resolve(__dirname, './node_modules/'),
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['latest']
                }
            }
        }, {
            /*test: /\.css$/,
             include: path.resolve(__dirname, './src/'),
             exclude: path.resolve(__dirname, './node_modules/'),
             use: [
             {loader: "style-loader"},
             {loader: "css-loader"}
             ]*/
            test: /\.css$/,
            use: ExtractCss.extract(//ExtractTextPlugin.extract({
                ("style-loader", "css-loader"))//参数为将css处理的loader
        },
            {
                test: /\.less$/,
                include: path.resolve(__dirname, './src/'),
                exclude: path.resolve(__dirname, './node_modules/'),
                use: [{
                    loader: "style-loader" // creates style nodes from JS strings
                }, {
                    loader: "css-loader" // translates CSS into CommonJS
                }, {
                    loader: "less-loader" // compiles Less to CSS
                }]
            },
            {
                test: /\.json$/,
                include: path.resolve(__dirname, './src/'),
                exclude: path.resolve(__dirname, './node_modules/'),
                use: 'json-loader'
            }]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        ExtractCss//将css放入指定文件下
        // new ExtractTextPlugin("style.css")//意思是如果在index.js文件中看到css文件，编译完成后将它单独提出封装并命名为style.css
        , new HtmlWebpackPlugin({
            title: 'dy',
            filename: '../index.html',
            template: __dirname + '/src/tpls/index.html',
            inject: 'body',
            info: '这是我webpack定义的语句'
        }),
        //引入全局的jquery
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery'
        }),
        //将V打包到lib目录下
        /*new webpack.optimize.CommonsChunkPlugin({
            name: 'v',
            filename: 'lib/jquery.min.js'
        })*/
        //new webpack.optimize.CommonsChunkPlugin只能示例化一次
        new webpack.optimize.CommonsChunkPlugin({
            names:['a','b']//a与b 是你的模块名称 不能加入后缀js ，例如  index.js 写成 index 加入数组
        })
    ],
    //重新定义加载jquery的地址
    externals: {
        jquery: "https://code.jquery.com/jquery-3.2.1.js"
    }
};