const mongoose = require('mongoose');
const Schema = mongoose.Schema;

/**
* Hint: Why is bcrypt required here?
*/
// const SALT_WORK_FACTOR = 10;
// const bcrypt = require('bcryptjs');

const answerSchema = new Schema({
//   usernaname: {type: String, required: true, unique: true},
//   password: {type: String, required: true}

     id: {type: String, required: true, unique:true},
     clarify: false,
     simplify: false,
     asktext: {type: String, required: true},
     askformat: {type: String, required: true},
     answer: answerController.passtoNLP(asktext)

});

module.exports = mongoose.model('Answer', answerSchema);
