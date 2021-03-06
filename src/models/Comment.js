import axios from 'axios'

class CommentModel {
	static create(postId, comment) {
		let request = axios.post('https://roughdraftapi.herokuapp.com/api/posts/' + postId + '/comments', comment);
		return request;
	}
	static delete(postId, comment) {
		let url = 'https://roughdraftapi.herokuapp.com/api/posts/' + postId + '/comments/' + comment._id
		let request = axios.delete(url);
		return request;
	}
}

export default CommentModel;