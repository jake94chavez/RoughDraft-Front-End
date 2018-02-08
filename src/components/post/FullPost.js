import React, {Component} from 'react'
import './FullPost.css'
import Comment from '../comment/Comment'

class FullPost extends Component {
	render() {
		let newText = this.props.content.split('\n').map( (item, i) => {
			return <p key={i}>{item}</p>
		})
		return(
			<div>
				<div className='FullPostContainer'>
					<h1>{this.props.title}</h1>
					<div>{newText}</div>
				</div>
				<div className='FullPostComments'>
				<Comment />
				</div>
			</div>
			)
	}
}

export default FullPost