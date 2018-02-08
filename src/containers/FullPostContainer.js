import React, { Component } from 'react'
import FullPost from '../components/post/FullPost'
import PostModel from '../models/Post'

class FullPostsContainer extends Component {
	constructor () {
		super();
		this.state = {
			posts: ""
		}
	}
	render () {
		let self = this;
		if (this.state.posts === "") {
			PostModel.all().then( (res) => {
				let posts = res.data.map((post) => {
					return (
						<MiniPost
						_id = {post._id}
						title = {post.title}
						/>
					)
				})
				self.setState({
					posts: posts
				})
				console.log(posts);
			})
		}
		return (
			<div className = "MiniPostsContainer">
				<h1>Posts Container</h1>
				{this.state.posts}
			</div>
		)
	}
}

export default FullPostsContainer;