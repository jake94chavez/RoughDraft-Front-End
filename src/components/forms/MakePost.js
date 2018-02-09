import React, {Component} from 'react'
import './MakePost.css'

class MakePost extends Component {
	render() {
		return(
			<div className='MakePostHolder'>
				<h3>Post a Story</h3>
				<input className='MakePostTitle PostForm' type='text' onChange={this.props.onInputChangeTitle} placeholder='Title' value={this.props.title}/>
				<br />
				<textarea className='MakePostContent PostForm' type='text' onChange={this.props.onInputChangeContent} placeholder='Story' value={this.props.content} />
				<br />
				<button onClick={this.props.handleSubmit}>Submit</button>
			</div>
		)
	}
}

export default MakePost