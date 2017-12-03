import React, { Component } from 'react';
import ReactDOM from 'react-dom';
// import BoilerContainer from './containers/boilercontainer.jsx';
import SpeechRecognition from 'react-speech-recognition';
import PropTypes from 'prop-types';


const propTypes = {
  // Props injected by SpeechRecognition
  transcript: PropTypes.string,
  resetTranscript: PropTypes.func,
  browserSupportsSpeechRecognition: PropTypes.bool,
  abortListening: PropTypes.func
}

class App extends Component {
  
  render() {
    const { transcript, resetTranscript, browserSupportsSpeechRecognition } = this.props
    if (!browserSupportsSpeechRecognition) {
      return null
    }

    return (
      <div>
        <button id="micoffbutton" onclick={abortListening}> 
          MIC OFF 
        </button>
    
        <button onClick={resetTranscript}>Reset</button>
        <span>{transcript}</span>
      </div>
    )
  }
}

 ReactDOM.render(
  <App />,
  document.getElementById('root')
);

const options = {
  autoStart: true
}

App.propTypes = propTypes

export default SpeechRecognition(options)(App)
