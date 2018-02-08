import React, { Component } from 'react'
import MiniPost from '../components/post/MiniPost'
import PostModel from '../models/Post'

class MiniPostsContainer extends Component {
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
			})
		}
		return (
			<div className = "MiniPostsContainer">
				<h2>Stories that need review</h2>
				{this.state.posts}
			</div>
		)
	}
}

export default MiniPostsContainer;