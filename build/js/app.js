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

Entry.prototype.getTeaser = function(entryBody) {
    var teaser = [];

    entryBody.split(' ').forEach(function(word, index) {
        var notEnd = word.indexOf('.') === -1;
        
        if (notEnd && index < 8) {
            teaser.push(word);
        }
    })

    teaser = teaser.join(' ');

    if (teaser[teaser.length -1] !== '.') {
        teaser += '...';
    }

    return teaser;
}

exports.entryModule = Entry;
},{}],2:[function(require,module,exports){
var Entry = require('./../js/journal.js').entryModule;

$(document).ready(function() {


  //Adds new journal entry title and preview below the form
  $('#journal-form').submit(function(event) {
    event.preventDefault();
    var title = $('#title-input').val();

    //reset title input
    $('#title-input').val('');

    var entry = new Entry(title);
    entry.body = $('#body-input').val();

    //reset body input
    $('#body-input').val('');

    $('#entries').append('<div class="entry-unit"><h3 class="title-display">' + entry.title + '</h3><p class="body-display">' + entry.getTeaser(entry.body) + '</p><p class="full-body hidden">' + entry.body + '</p><h2 class="view-more">View More</h2><hr><button class="word-count">Count Words</button><button class="vowel-count">Count Vowels</button></div>');
  })

  //expand teaser into full entry onclic
  $('.view-more').click(function() {
    console.log('clicked');
    $('p.full-body').removeClass('hidden');
    $('p.body-display').addClass('hidden');
  })
})


},{"./../js/journal.js":1}]},{},[2]);
