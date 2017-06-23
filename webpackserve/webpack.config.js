/**
 * Created by dy on 2017/6/20.
 */
var webpack= require('webpack');
var path=require('path');
module.exports = {
    entry:__dirname+'/src/js/index.js',
    output:{
        path:__dirname+'/assets/js/',
        filename:'index.js',
        publicPath:'/temp/'//相当于内存文件，用于快速读取，目录上是不显示的
    },
    devServer:{
        contentBase:'./',//基础路径
        host:'192.168.10.43',//必须是本机的ip,否则报错
        port:'8585',//端口
    },
    module:{
        loaders:[{
            test:/\.css$/,//正则的写法
            loader:'style-loader!css-loader'//用这两个框架翻译css文件
        },{
            test:/\.less$/,//less
            loader:'style!css!less'
        },{
            test:/\.json$/,//json
            loader:'json-loader'//如果不知道包名请在github npm上查找
        },{
            test:/\.js$/,//json
            exclude:/node_modules/,
            loader:'json-loader'//如果不知道包名请在github npm上查找
        }],//配置文件的属性,
        //rules:[
        //    {
        //        test: /\.js$/,
        //        include: path.resolve(__dirname, '/src/'),
        //        exclude: path.resolve(__dirname, '/node_modules/'),
        //        use: {
        //            loader: 'babel-loader',
        //            options: {
        //                presets: ['latest']
        //            }
        //        }
        //}]
    },
    plugins:[//插件
        new webpack.HotModuleReplacementPlugin()
    ],

};