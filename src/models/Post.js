import axios from 'axios'

class PostModel {
	static create(post) {
		let request = axios.post('https://roughdraftapi.herokuapp.com/api/posts', post);
		return request;
	}
	static all() {
		let request = axios.get('https://roughdraftapi.herokuapp.com/api/posts')
		return request;
	}
	static getOne(postId) {
		let url = 'https://roughdraftapi.herokuapp.com/api/posts' + postId;
		let request = axios.get(url);
		return request;
	}
	static delete(post) {
		let url = 'https://roughdraftapi.herokuapp.com/api/posts' + post._id
		let request = axios.delete(url);
		return request;
	}
	static update(postId, postBody) {
		let url = 'https://roughdraftapi.herokuapp.com/api/posts' + postId;
		let request = axios.put(url, {
			body: postBody
		});
		return request;
	}
}

export default PostModel;