const answerCollection = require('./../../db/database');
const askformatoptions = ["what","how","where","why"];

module.exports = {
  getAnswers: (request,response) => {
    if(askformatoptions.includes(request)!==true){
          return "error: unacceptable ask";
      }else{
          // query db with request data
      }
  },
    
  postAnswers: (request,response) => {
    // write code here

  },

  clarify: (askformat) => {
      if(askformatoptions.includes(askformat)!==true){
          return "error: unacceptable ask";
      }else if(askformat === "what"){
          //query db
      }else if(askformat === "how"){
          //query db
      }else if(askformat === "where"){
          //query db
      }else if(askformat === "why"){
          //query db
      }else{
          console.log("error: askformat -> db: query issue");
      }
    },

  simplify: (answer) => {


    },

  pacing: (pause) => {


  }
};