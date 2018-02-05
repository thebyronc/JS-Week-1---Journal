(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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

},{}],2:[function(require,module,exports){
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

},{"./../js/entry.js":1}]},{},[2]);
