/**
 * Created by dy on 2017/6/21.
 */
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');//引入插件
var ExtractCss = new ExtractTextPlugin('../css/[name].css');//将css文件放入特定的位置
var path = require('path');
module.exports = {
    entry: __dirname + '/src/js/index.js',
    output: {
        path: __dirname + '/assets/js/',
        filename: 'index.js',
        publicPath: 'temp'
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
            use: ExtractCss.extract({//ExtractTextPlugin.extract({
                fallback: "style-loader",
                use: "css-loader"
            })//参数为将css处理的loader
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
    }, plugins: [
        new webpack.HotModuleReplacementPlugin(),
        ExtractCss//将css放入指定文件下
        // new ExtractTextPlugin("style.css")//意思是如果在index.js文件中看到css文件，编译完成后将它单独提出封装并命名为style.css
    ]
};