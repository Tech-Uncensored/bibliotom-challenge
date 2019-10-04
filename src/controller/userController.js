
const User = require('../models/User')

exports.user = (req, res) => {
    res.send('User: ' + req.params)
}