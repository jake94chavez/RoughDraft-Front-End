import React, {Component} from 'react';
import './Header.css'

class Header extends Component {
	render () {
		return (
		<header className='App-header'>
          <h1 className='App-title'><a href='/' className='plain'>RoughDraft</a></h1>
        </header>
        )
    }
}

export default Header