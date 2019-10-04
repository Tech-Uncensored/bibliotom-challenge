let model = require('mongoose').model

let SchemaUser = require(root + '/path/to/models/user/')
let SchemaProduct = require(root + '/path/to/models/product/')
let SchemaCompany = require(root + '/path/to/models/company/')

module.exports = {
    User: model('user', userSchema)
}