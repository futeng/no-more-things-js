// ==UserScript==
// @name         去掉慕课网（imooc.com）视频播放的左右边栏
// @namespace    http://www.futeng.me/tampermonkey
// @version      0.1
// @description  通常一遍看视频，一遍记录笔记。发现横向缩窄页面后左右边栏占据屏幕的宽度就愈加不可忍受。此脚本为简单的定位两个边栏css id，并remove掉。
// @author       futeng
// @match        https://www.imooc.com/*
// @grant        none
// @require      https://www.imooc.com/static/lib/jquery/1.9.1/jquery.js
// @license MIT
// ==/UserScript==

(function() {
    'use strict';
    $("#courseSidebar").remove();
    $("#courseRight").remove();


})();
