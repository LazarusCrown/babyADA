import React from 'react';
import './sasssorry.scss';

const Sorry = props => (
  <div id="sorryresponse">
    <h1>
      Sorry, I don't know how to answer that yet. 
      If you'd like to you can ask me something else!
    </h1>

    <button id="resetbutton" onClick={()=>props.handleClick("reset")}>
      RESET babyADA
    </button>


    {/* <h1>{props.counter}</h1>
    <button onClick={() => props.handleClick(1)}>1</button>
    <button onClick={() => props.handleClick(5)}>5</button>
    <button onClick={() => props.handleClick(10)}>10</button> */}

  </div>
);

export default clarity;