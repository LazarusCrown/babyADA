const express = require('express');
const path = require('path');
const app = express();
const fs = require('fs');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const mongoURI = process.env.NODE_ENV === 'test' ? 'mongodb://localhost/babyADAreactversion' : 'mongodb://localhost/babyADAreactversion';
mongoose.connect(mongoURI);

// const cookieController = require('./util/cookieController');
// const sessionController = require('./session/sessionController');
// app.use(cookieParser());

const answerController = require('./answer/answercontroller');
const askController = require('./ask/askcontroller');

app.use(express.static(path.join(__dirname + './../public')));
app.use(bodyParser.urlencoded({ extended: true }));

//GETS

app.get('/', (req,res) => {
  res.render('/index');
});

// app.get('/styles', (req,res) => {
//   res.render('/styles')
// });

// app.get('/signup', cookieController.setCookie, (req, res) => {
//   res.render('./../client/signup', {error: null});
// });

// app.get('/answer', answerController.createAnswer, (req, res) => {
//   // res.render('./../signup', {error: null});
// });

//POSTS

// app.post('/', askController.createAsk, (req,res) => res.redirect('./../answer'));

// app.post('/answer', askController.createAsk, (req,res) => res.redirect('./../answerchain'));

// sessionController.startSession
//cookieController.setSSIDCookie
/**
* login
*/
// app.post('/login', userController.verifyUser, cookieController.setSSIDCookie, sessionController.startSession, (req,res) => res.redirect('./../secret'));

// app.get('/secret', (req, res) => {
//   console.log("arrived at secret");
//   userController.getAllUsers((err, users) => {
//     if (err) throw err;

//     res.render('./../client/secret', {users: users});
//   });
// });


app.listen(3000, () => {
  console.log('Listening on port 3000');
});

module.exports = app;