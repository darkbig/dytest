(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
//commomjs 模块规范必须有两个 第一module(模块) 第二 exports（入口）
module.exports={
    add:function(a,b){
        console.log(a+b)
    }
};

},{}],2:[function(require,module,exports){
// 不能直接写require('add');否则是全局模块
var add = require('./add').add;
add(1,2);
},{"./add":1}]},{},[2]);
