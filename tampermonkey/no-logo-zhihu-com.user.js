// ==UserScript==
// @name         Don't show logo from zhihu.com
// @namespace    http://www.futeng.me/tampermonkey
// @version      0.1
// @description  try to remove logo from zhihu.com.
// @author       futeng
// @match        https://www.zhihu.com/*
// @grant        none
// @require      https://csdnimg.cn/public/common/libs/jquery/jquery-1.9.1.min.js
// @license MIT
// ==/UserScript==

(function() {
    'use strict';

    $(".AppHeader-inner a").remove();
    $(".ColumnPageHeader-content a").remove();
    console.log("it works");

})();
