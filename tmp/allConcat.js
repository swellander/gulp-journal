var Entry = require('./../js/journal.js').entryModule;

$(document).ready(function() {
  $('#journal-form').submit(function(event) {
    event.preventDefault();
    var title = $('#title-input').val();
    var entry = new Entry(title);
    entry.body = $('#body-input').val();

    $('#entries').append('<h3 class="title-display">' + entry.title + '</h3><p class="body-display">' + entry.getTeaser(entry.body) + '</p><hr><button id="word-count">Count Words</button><button id="vowel-count">Count Vowels</button>');
  })
})