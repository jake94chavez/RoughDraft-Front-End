import React, {Component} from 'react';
import logo from '../../logo.svg';
import MiniPost from '../post/MiniPost';

class Home extends Component {
  render() {
    return (
      <div>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React ya big dumb stupid</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <MiniPost />
      </div>
    )
  }
}

export default Home;