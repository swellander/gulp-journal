!function(){return function n(t,o,e){function r(u,a){if(!o[u]){if(!t[u]){var l="function"==typeof require&&require;if(!a&&l)return l(u,!0);if(i)return i(u,!0);var s=new Error("Cannot find module '"+u+"'");throw s.code="MODULE_NOT_FOUND",s}var c=o[u]={exports:{}};t[u][0].call(c.exports,function(n){var o=t[u][1][n];return r(o||n)},c,c.exports,n,t,o,e)}return o[u].exports}for(var i="function"==typeof require&&require,u=0;u<e.length;u++)r(e[u]);return r}}()({1:[function(n,t,o){function e(n){this.title=n}e.prototype.howManyWords=function(n){return n.split(" ").length},e.prototype.howManyVowels=function(n){var t=n.replace(/[\. ,:-]+/g,"-").split(""),o=["a","e","i","o","u"],e=0;return t.forEach(function(n){-1!==o.indexOf(n)&&e++}),e},e.prototype.howManyConsonants=function(n){var t=n.replace(/[\. ,:-]+/g,"-").split(""),o=["a","e","i","o","u"],e=0;return t.forEach(function(n){-1===o.indexOf(n)&&e++}),e},e.prototype.getTeaser=function(n){var t=[];return n.split(" ").forEach(function(n,o){-1===n.indexOf(".")&&o<8&&t.push(n)}),"."!==(t=t.join(" "))[t.length-1]&&(t+="..."),t},o.entryModule=e},{}],2:[function(n,t,o){var e=n("./../js/journal.js").entryModule;$(document).ready(function(){$("#journal-form").submit(function(n){n.preventDefault();var t=$("#title-input").val();$("#title-input").val("");var o=new e(t);o.body=$("#body-input").val(),$("#body-input").val(""),$("#entries").append('<div class="entry-unit"><h3 class="title-display">'+o.title+'</h3><p class="body-display">'+o.getTeaser(o.body)+'</p><p class="full-body hidden">'+o.body+'</p><h2 class="view-more">View More</h2><br><p>Created at: '+moment()+'</p><hr><button class="word-count">Count Words</button><button class="vowel-count">Count Vowels</button></div>')}),$(".view-more").click(function(){console.log("clicked"),$("p.full-body").removeClass("hidden"),$("p.body-display").addClass("hidden")})})},{"./../js/journal.js":1}]},{},[2]);