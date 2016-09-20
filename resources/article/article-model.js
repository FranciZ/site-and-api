const mongoose = require('mongoose');

const Schema = new mongoose.Schema({
  title       : String,
  content     : String,
  dateCreated : { type:Date, default:Date.now},
  author      : String
});

mongoose.model('Article', Schema);