const mongoose = require('mongoose');
const institutionSchema = require('./schema');

const Institution = mongoose.model('Institution', institutionSchema);

module.exports = Institution;