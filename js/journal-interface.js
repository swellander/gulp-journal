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

    $('#entries').append('<div class="entry-unit"><h3 class="title-display">' + entry.title + '</h3><p class="body-display">' + entry.getTeaser(entry.body) + '</p><p class="full-body hidden">' + entry.body + '</p><h2 class="view-more">View More</h2><br><p>Created at: ' + moment() + '</p><hr><button class="word-count">Count Words</button><button class="vowel-count">Count Vowels</button></div>');
  });

  //expand teaser into full entry onclic
  $('.view-more').click(function() {
    console.log('clicked');
    $('p.full-body').removeClass('hidden');
    $('p.body-display').addClass('hidden');
  });
});

