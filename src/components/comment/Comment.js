import React, {Component} from 'react'
import './Comment.css'

class Comment extends Component {
	render() {
		return(
			<div>
				<p>{this.props.content}</p>
			</div>
			)
	}
}

export default Comment