/**
 * Created by dy on 2017/6/22.
 */
var $=require('jquery');

import css from'../css/index.css';

import less from '../css/divbg.less';

import json from '../../data/test.json';

define('aaa',function(){
    return '帅哥';
});

$('#wel').html(
    '欢迎————————'+require('aaa')+json.name);

window.onbeforeunload = function(){
    return confirm('您确定要离开本网页');
};