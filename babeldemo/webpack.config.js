/**
 * Created by dy on 2017/6/21.
 */
var webpack = require('webpack');
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
            test: /\.css$/,
            include: path.resolve(__dirname, './src/'),
            exclude: path.resolve(__dirname, './node_modules/'),
            use: [
                {loader: "style-loader"},
                {loader: "css-loader"}
            ]
        },{
            test: /\.less$/,
            include: path.resolve(__dirname, './src/'),
            exclude: path.resolve(__dirname, './node_modules/'),
            use: [{
                loader: "less-loader" // compiles Less to CSS
            },{
                loader: "style-loader" // creates style nodes from JS strings
            }, {
                loader: "css-loader" // translates CSS into CommonJS
            }]
        }]
    }
};