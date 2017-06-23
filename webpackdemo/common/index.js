// 不能直接写require('add');否则是全局模块
var add = require('./add').add;
add(1,2);