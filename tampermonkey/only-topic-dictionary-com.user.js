// ==UserScript==
// @name         Don't want exploy Dictionary.com
// @namespace    http://www.futeng.me/tampermonkey
// @version      0.1
// @description  try to remove "Explore Dictionary.com", "Others Are Reading" and "Word of the Day".
// @author       futeng
// @match        https://www.dictionary.com/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Remove sponsor top of page
    var sponsorId = document.getElementById("dcom-serp-lb-728x90");
    sponsorId.parentNode.removeChild(sponsorId);

    var sponsorId_2 = document.getElementById("dcom-serp-a-top-300x250");
    sponsorId_2.parentNode.removeChild(sponsorId_2);

    var sponsorId_3 = document.getElementById("dcom-serp-a-mid-300x250");
    sponsorId_3.parentNode.removeChild(sponsorId_3);



    // Remove aside
    var aside_list = document.getElementsByClassName('css-1rm7u2e e1bbcgok0');

    while(aside_list.length != 0) {
        aside_list[0].parentElement.removeChild(aside_list[0]);
    }

    // Remove Word of the day
    var wordOfTheDay = document.getElementsByClassName("css-1q7njkh e1ywvkmy0");
    wordOfTheDay[0].parentNode.removeChild(wordOfTheDay[0]);

    console.log("it works");

})();