import React, {Component} from 'react'
import './MakePost.css'

class MakePost extends Component {
	render() {
		return(
			<div className='MakePostHolder'>
				<h3>Post a Story</h3>
				<input className='MakePostTitle' type='text' onChange={this.props.onInputChangeTitle} placeholder='Title' />
				<br />
				<textarea className='MakePostContent' type='text' onChange={this.props.onInputChangeContent} placeholder='Story' />
				<br />
				<button onClick={this.props.handleSubmit}>Submit</button>
			</div>
		)
	}
}

export default MakePost