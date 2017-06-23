/**
 * Created by dy on 2017/6/22.
 */
require('../../node_modules/jQuery/tmp/jquery.js');

import css from'../css/index.css';

import less from '../css/divbg.less';
define('aaa',function(){
    return '妹妹';
});

$('#wel').html(
    '欢迎————————'+require('aaa'));
