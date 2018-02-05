function Entry(title, entry) {
  this.title = title;
  this.entry = entry;
}

Entry.prototype.countWords = function(entry) {
  var output = entry.split(" ");
  console.log('reached countWords function');
  return output.length;
};

exports.entryModule = Entry;
