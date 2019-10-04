const {Schema} = require('mongoose');
const ObjectId = Schema.Types.ObjectId;

let Book = new Schema({
  isbn:  String,
  title: String,
  author:   String,
  institutions: [ObjectId]
});

module.exports = Book;