const express = require('express');
const router = express.Router();

router.get('/users', async (req, res) => {
    const user = req.context.models.User.find()
    return res.send(user)
  })
  
  module.exports = router;