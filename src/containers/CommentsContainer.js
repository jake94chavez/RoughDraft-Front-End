import React, { Component } from 'react'
import Comments from '../components/comment/Comment'
import PostModel from '../models/Post'
import CommentModel from '../models/Comment'

class CommentsContainer extends Component {
	constructor () {
		super();
		this.state = {
			comments: '',
			confirm: 'Y'
		}
	this.handleDeleteComment = this.handleDeleteComment.bind(this);
	}
	handleDeleteComment() {
		let self = this;
		let confirm = prompt('Are you sure you want to delete this comment? Type "Y" if you want to delete this comment.')
		if (confirm === this.state.confirm) {
			CommentModel.delete(self.props.postId, this.comments).then( (res) => {
				self.setState({ redirect: true })
			})
		}
	}
	render () {
		let self = this;
		if (this.state.comments === '') {
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
			<div className = 'CommentsContainer'>
				{this.state.comments}
			</div>
		)
	}
}

export default CommentsContainer;