import React, {Component} from 'react'
import MakePost from '../components/forms/MakePost'
import PostModel from '../models/Post'

class MakePostContainer extends Component {
	constructor() {
		super();
		this.state = {
			title: '',
			content: ''
		}
		this.handleSubmit = this.handleSubmit.bind(this);
		this.onInputChangeTitle = this.onInputChangeTitle.bind(this);
		this.onInputChangeContent = this.onInputChangeContent.bind(this);
	}
	handleSubmit() {
		let self = this;
		let storyPost = {
			title: self.state.title,
			content: self.state.content
		}
		PostModel.create(storyPost).then( (res) => {
			})
		self.setState({
			title: '',
			content: ''
		})
	}
	onInputChangeTitle(e) {
		this.setState({
			title: e.target.value
		})
	}
	onInputChangeContent(e) {
		this.setState({
			content: e.target.value
		})
	}
	render() {
		return (
			<div className='MakePostFormContainer'>
				<MakePost 
				title = {this.state.title}
				content = {this.state.content}
				handleSubmit = {this.handleSubmit}
				onInputChangeTitle = {this.onInputChangeTitle}
				onInputChangeContent = {this.onInputChangeContent}
				/>
			</div>
		)
	}
}

export default MakePostContainer