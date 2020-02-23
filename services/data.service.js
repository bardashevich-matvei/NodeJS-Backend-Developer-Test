import rp from 'request-promise';
import Post from '../models/post.model';
import User from '../models/user.model';

class DataService {
	constructor() {}

	async getPosts() {
		const response = await rp('https://jsonplaceholder.typicode.com/posts', {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json;charset=utf-8'
			},
		});
        
		return JSON.parse(response);
	}

	async getUsers() {
		const response = await rp('https://jsonplaceholder.typicode.com/users', {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json;charset=utf-8'
			},
		});
        
		return JSON.parse(response);
	}
    
	async addPosts(posts) {
		// return Promise.all([posts.forEach(async item => await new Post(item).save())]);
	}
    
	async addUsers(users) {
		// return Promise.all([users.forEach(async item => await new User(item).save())]);
	}

	async getData() {
		return Promise.all([
			User.find(),
			Post.find()
		]);
	}
}

export default new DataService();