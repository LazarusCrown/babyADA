const express = require('express');
const app = express();
const path = require('path');
const answercontroller = require('./controller/answercontroller');

// const authController = require('./utils/authController');

const bodyParser = require('body-parser');

app.use(express.static(path.join(__dirname, './../client')));

// place routes here







app.listen(3000);

module.exports = app;