(function(){function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s}return e})()({1:[function(require,module,exports){
function Entry(title) {
    this.title = title;
}

Entry.prototype.howManyWords = function(entry) {
  var entryArr = entry.split(' ');
  return entryArr.length;
}

Entry.prototype.howManyVowels = function(entry) {
  var entryArr = entry.replace(/[\. ,:-]+/g, "-").split('');
  var vowels = ['a', 'e', 'i', 'o', 'u'];
  var vowelCount = 0;

  entryArr.forEach(function(letter) {
      if (vowels.indexOf(letter) !== -1) {
          vowelCount ++;
      }
  })

  return vowelCount;
}

Entry.prototype.howManyConsonants = function(entry) {
    var entryArr = entry.replace(/[\. ,:-]+/g, "-").split('');
    var vowels = ['a', 'e', 'i', 'o', 'u'];
    var consonantCount = 0;

    entryArr.forEach(function(letter) {
        if (vowels.indexOf(letter) === -1) {
            consonantCount ++;
        }
    });

    return consonantCount
}

exports.entryModule = Entry;
},{}],2:[function(require,module,exports){
var Entry = require('./../js/journal.js').entryModule;

$(document).ready(function() {
  $('#journal-form').submit(function(event) {
      event.preventDefault();
  })
})
},{"./../js/journal.js":1}]},{},[2]);
