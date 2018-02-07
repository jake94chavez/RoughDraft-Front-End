import React, {Component} from 'react';
// import logo from '../../logo.svg';
import MiniPostsContainer from '../../containers/MiniPostsContainer';

class Home extends Component {
  render() {
    return (
      <div>
        <header className="App-header">
          <h1 className="App-title">Welcome to RoughDraft</h1>
        </header>
        <p className="App-intro">
          A place to get meaningful feedback on your written work.
        </p>
        <MiniPostsContainer />
      </div>
    )
  }
}

export default Home;