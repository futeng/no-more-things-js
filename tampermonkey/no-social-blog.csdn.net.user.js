// ==UserScript==
// @name         CSDN免登陆/自动加载/美化阅读
// @namespace    http://www.futeng.me/
// @version      0.1
// @description  不知道啥时候，csdn需要登录才能查看更多，很烦！！！
// @author       futeng 
// @license MIT
// @copyright forked by 2018, zhoushengming (https://openuserjs.org//users/zhoushengming)
// @match        *://blog.csdn.net/*
// @grant        none
// @require      https://csdnimg.cn/public/common/libs/jquery/jquery-1.9.1.min.js
// ==/UserScript==

(function() {
    'use strict';

    // Your code here...
    $("div.article_content").removeAttr("style");
    $("#btn-readmore").parent().remove();
    
    //话说fork别人的代码修改后怎么填写 UserScript信息
    
    
    //删除登录框
    $(".pulllog-box").remove();
    
    //以下修改仅为个人更好的阅读使用，去除了所有社交功能，请慎重使用
    //删除点赞等按钮
    $(".tool-box").remove();
    $(".meau-gotop-box").remove();
    
    //去除标题框
    $("#csdn-toolbar").remove();
    
    //去除左下角官方推广
    $("#asideFooter").remove();
    
    //去除其他推荐中的博主关注推荐功能
    $(".blog-expert-recommend-box").remove();
    
    
    
})();
