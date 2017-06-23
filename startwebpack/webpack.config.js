module.exports={
    entry: __dirname+'/src/js/index.js',//唯一入口文件 __dirname为node方法为当前地址目录
    output:{//输出文件
        path:__dirname+"/assets/js",//输出地址
        filename:'index.js'//输出的文件名
    }
};