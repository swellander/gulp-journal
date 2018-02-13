var Entry = require('./../js/journal.js').entryModule;

$(document).ready(function() {
  $('#journal-form').submit(function(event) {
      event.preventDefault();
      alert('FORM WAS SUBMITTED!')
  })
})