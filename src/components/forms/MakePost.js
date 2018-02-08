import React, {Component} from 'react'
import './MakePost.css'

class MakePost extends Component {
	render() {
		return(
			<div className='MakePostHolder'>
				<h3>Post a Story</h3>
				<input className='MakePostTitle' type='text' placeholder='Title' />
				<br />
				<textarea className='MakePostContent' type='text' placeholder='Story' />
				<br />
				<button>Submit</button>
			</div>
		)
	}
}

export default MakePost