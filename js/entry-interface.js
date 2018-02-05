var Entry = require('./../js/entry.js').entryModule;

$(document).ready(function() {
  $('#entry-form').submit(function(event) {
    event.preventDefault();
    var title = $('#title').val();
    console.log('title: ' + title);
    var entry = $('#entry').val();
    console.log('entry: ' + entry);

    var simpleEntry = new Entry(title, entry);
    var wordCount = simpleEntry.countWords(entry);
    $('#output').text('Count: ' + wordCount);
  });

});
