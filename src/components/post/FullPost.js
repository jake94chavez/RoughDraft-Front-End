import React, {Component} from 'react'
import './FullPost.css'
import Comment from '../comment/Comment'

class FullPost extends Component {
	render() {
		return(
			<div>
				<div className='FullPostContainer'>
					<h2>{this.props.title}</h2>
					<p>{this.props.content}</p>
				</div>
				<div className='FullPostComments'>
				<Comment />
				</div>
			</div>
			)
	}
}

export default FullPost