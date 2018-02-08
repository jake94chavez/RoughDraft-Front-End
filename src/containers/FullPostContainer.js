import React, { Component } from 'react'
import FullPost from '../components/post/FullPost'
import PostModel from '../models/Post'

class FullPostContainer extends Component {
	constructor () {
		super();
		this.state = {
			post: ""
		}
	}
	render () {
		let self = this;
		if (this.state.post === "") {
			PostModel.getOne(self.props.match.params.id).then( (res) => {
				let post = res.data;
				let renderedPost = (
						<FullPost
						_id = {post._id}
						title = {post.title}
						content = {post.content}
						/>
					)
				self.setState({
					post: renderedPost
				})
			})
		}
		return (
			<div className = "FullPostContainer">
				{this.state.post}
			</div>
		)
	}
}

export default FullPostContainer;