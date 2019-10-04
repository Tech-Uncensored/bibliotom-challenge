/**
 * The default index route handler.
 * Responds to a request with body content to demonstrate the app is running as expected.
 */

const express = require('express');
const router = express.Router();
const {Schema} = require('mongoose');
const ObjectId = Schema.Types.ObjectId;
const Book = require('../models/Book');


//index.js
// module.exports = {
//   user,
  
// }


router.post('/users/signin', (req, res) => {
  // Use the passport library to authenticate a user and respond with a successful message that uses the JSend framework
  res.status(200).send('success')
})

router.post('/users/create', (req, res) => {
  // Creates a user and based on the user’s email domain links them to an institution. Denies creation of a user if their domain does not exist.
  res.status(200).send('success')
})

router.get('/books', (req, res) => {
  // Once authenticated, responds with a JSON object containing a list of Books that the user has access to via their Institution.
  Book.find().then( (books) => {
    console.log(books);
    res.status(200).json(books)
  })
})

module.exports = router
