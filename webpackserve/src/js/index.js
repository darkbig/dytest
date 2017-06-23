/**
 * Created by dy on 2017/6/20.
 */
var $=require('jQuery');//加载jquery
//加载css
import css from "../css/index.css";//es6语法引入
//加载json
import dyjson from "../../data/test.json";

//AMD加载json
$('#wel').html(`你好我是jquery打包工具`+dyjson.name);