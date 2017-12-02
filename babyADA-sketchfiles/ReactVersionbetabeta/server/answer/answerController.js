const Answer = require('./answerModel');

// const cookieController = require('./../cookies/cookieController');
// const sessionController = require('./../sessions/sessionController');

const answerController = {};

/**
* getAllAnswers
* @param next - Callback Function w signature (err, users)
*/

answerController.getAllUsers = (next) => {
  Answer.find({}, next);
};

/**
*
* @param req - http.IncomingRequest
* @param res - http.ServerResponse
*/

answerController.createAnswer = (req, res, next) => {
  let newAnswer = new Answer;
  newAnswer.asktext = req.body.asktext;
  newAnswer.askformat = req.body.askformat;
  newAnswer.save(function(error){
    if(error){
      res.render('/', {error});
    }else{
      req.id = newAnswer.id;
      next();
    }
  })
};

module.exports = answerController;