import React, { Component } from 'react';
import Bloclinks from '../components/Bloclinks.jsx';

const bloclinks = [];

class BlocLinkContainer extends Component {
  constructor(props) {
    super(props);
    this.state = { 
        blocscount: 0,
        bloclink: bloclinks.push()
    };
  }

  increment = num => this.setState({ clicks: this.state.blocscount + num });
  render = () => <Bloclinks handleClick={this.increment} counter={this.state.blocscount} />;
}

export default BlocContainer;