import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import FullPost from '../components/post/FullPost'
import PostModel from '../models/Post'
import CommentsContainer from './CommentsContainer'
import Header from '../components/header/Header'

class FullPostContainer extends Component {
	constructor () {
		super();
		this.state = {
			post: '',
			title: '',
			redirect: false
		}
		this.deletePost = this.deletePost.bind(this);
	}
	deletePost() {
		let self = this;
		let confirm = prompt('Deleting a post is irreversible. If you are sure you want to delete this post, type the title of the post.')
		console.log(this)
		if (confirm === this.state.title) {
			PostModel.delete(this.state.post).then( (res) => {
				self.setState({ redirect: true })
			})
		}
	}	
	render () {
		let self = this;
		if (this.state.redirect) {
			return (
				<Redirect to='/' push />
				)
			}
		else if (this.state.post === '') {
			PostModel.getOne(self.props.match.params.id).then( (res) => {
				let post = res.data;
				let renderedPost = (
						<FullPost
						_id = {post._id}
						title = {post.title}
						content = {post.content}
						deletePost = {self.deletePost}
						/>
					)
				self.setState({
					post: renderedPost,
					title: post.title
				})
			})
		}
		return (
			<div className = 'FullPostContainer'>
				<Header />
				{this.state.post}
				<hr />
				<h3>Comments</h3>
				<CommentsContainer
				postId = {self.props.match.params.id} 
				/>
			</div>
		)
	}
}

export default FullPostContainer;