const {Schema} = require('mongoose');

let Institution = new Schema({
  name:  String,
  url: String,
  domain:   String,
});

module.exports = Institution;