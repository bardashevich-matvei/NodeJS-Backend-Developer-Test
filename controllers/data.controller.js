import dataService from '../services/data.service';

class DataController {
	constructor () {}

	async getData(req, res) {
		const [users, posts] = await dataService.getData();
		res.json({users, posts});
	}
}

export default new DataController();