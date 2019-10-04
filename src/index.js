require('dotenv').config();
const fs = require('fs');
const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
// const helmet = require('helmet');
const cors = require('cors');

const indexRouter = require('./routes/index.js');

mongoose.connect(`mongodb+srv://${process.env.USERNAME}:${process.env.DBPASS}@default-w3x91.mongodb.net/default?retryWrites=true&w=majorit`, {useNewUrlParser: true});
mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
mongoose.set('useUnifiedTopology', true);
const app = express();
app.use(cors())
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use('/', indexRouter);

const PORT = process.env.PORT || 3000
app.listen(PORT || 3000, () => {
    console.log(`server success on ${PORT}`);
})
