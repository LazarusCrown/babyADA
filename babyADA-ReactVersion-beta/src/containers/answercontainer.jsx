import React, { Component } from 'react';
import Answer from '../components/Answer.jsx';

class AnswerContainer extends Component {
  constructor(props) {
    super(props);
    this.state = { 
        blocs: 0,
        answers: 0,
        logline: "",

    };
  }

  answercreate = (req,res) => new Answer;
  increment = num => this.setState({ answers: this.state.answers + num });
  render = () => <AnswerContainer addToAnswerCount={this.increment} addNewAnswer={this.answercreate} />;
}

export default AnswerContainer;