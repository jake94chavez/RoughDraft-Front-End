import React, {Component} from 'react'
import './AddComment.css'

class AddComment extends Component {
	render() {
		return(
			<div className='AddCommentHolder'>
				<textarea className='MakeComment' type='text' onChange={this.props.onInputChangeContent} placeholder='Comment here' value={this.props.content} />
				<br />
				<button onClick={this.props.handleSubmit}>Submit</button>
			</div>
		)
	}
}

export default AddComment