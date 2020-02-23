import dataService from '../services/data.service';

class ViewsController {
	constructor () {}

	async main(req, res) {
		const postData = await dataService.getPosts();
		const userData = await dataService.getUsers();
		await dataService.addPosts(postData);
		await dataService.addUsers(userData);
		res.render('main');
	}
}

export default new ViewsController();