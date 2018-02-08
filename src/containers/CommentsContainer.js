import React, { Component } from 'react'
import Comments from '../components/comment/Comment'
import PostModel from '../models/Post'

class CommentsContainer extends Component {
	constructor () {
		super();
		this.state = {
			comments: ""
		}
	}
	render () {
		let self = this;
		if (this.state.comments === "") {
			PostModel.getOne(self.props.postId).then( (res) => {
				let comments = res.data.comments.map( (comment) => {
					return (
						<Comments
						_id = {comment._id}
						content = {comment.content}
						votes = {comment.votes}
						/>
					)
				});
				self.setState({
					comments: comments
				})
			})
		}
		return (
			<div className = "CommentsContainer">
				{this.state.comments}
			</div>
		)
	}
}

export default CommentsContainer;