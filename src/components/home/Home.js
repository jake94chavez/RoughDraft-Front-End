import React, {Component} from 'react';
// import logo from '../../logo.svg';
import MiniPostsContainer from '../../containers/MiniPostsContainer';
import MakePostContainer from '../../containers/MakePostContainer'
import Header from '../header/Header'

class Home extends Component {
  render() {
    return (
      <div>
      <Header />
        <p className='App-intro'>
          A place to get meaningful feedback on your written work.
        </p>
        <MiniPostsContainer />
        <MakePostContainer />
      </div>
    )
  }
}

export default Home;