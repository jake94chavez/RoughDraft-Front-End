import React, {Component} from 'react'
import AddComment from '../components/forms/AddComment'
import CommentModel from '../models/Comment'

class AddCommentContainer extends Component {
	constructor() {
		super();
		this.state = {
			content: '',
			votes: 0
		}
		this.handleSubmit = this.handleSubmit.bind(this);
		this.onInputChangeContent = this.onInputChangeContent.bind(this);
	}
	handleSubmit(e) {
		let self = this;
		let newComment = {
			content: self.state.content,
			votes: 0
		}
		CommentModel.create(self.props.postId, newComment).then( (res) => {
			})
		self.setState({
			content: ''
		})
	}
	onInputChangeContent(e) {
		this.setState({
			content: e.target.value
		})
	}
	render() {
		return (
			<div className='AddCommentFormContainer'>
				<AddComment 
				content = {this.state.content}
				handleSubmit = {this.handleSubmit}
				onInputChangeContent = {this.onInputChangeContent}
				/>
			</div>
		)
	}
}

export default AddCommentContainer