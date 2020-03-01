(async function () {
	let data = await fetch('http://localhost:3000/api/', {
		method: 'GET',
		headers: {
			'Content-Type': 'application/json;charset=utf-8'
		},
	});
	data = await data.json();
	const users = data.users;
	const posts = data.posts;
	document.getElementById('caption').innerHTML = 'Welcome to the NodeJS Backend Developer Test App';
	posts.forEach(item => {
		let post = document.createElement('tr');
		let postId = document.createElement('td');
		postId.innerHTML = item.id;
		let title = document.createElement('td');
		title.innerHTML = item.title;
		let body = document.createElement('td');
		body.innerHTML = item.body;

		const user = users.find(x => x.id === item.userId);
		let userId = document.createElement('td');                
		userId.innerHTML = user.id;
		let name = document.createElement('td');                
		name.innerHTML = user.name;
		let username = document.createElement('td');                
		username.innerHTML = user.username;
		let email = document.createElement('td');                
		email.innerHTML = user.email;
		let phone = document.createElement('td');                
		phone.innerHTML = user.phone;
		let website = document.createElement('td');                
		website.innerHTML = user.website;
		let address = document.createElement('td');                
		address.innerHTML = user.address.city + ' ' + user.address.street + ' ' + user.address.suite + '<br/>' + user.address.zipcode;
		let company = document.createElement('td');                
		company.innerHTML = user.company.name + '<br/>' + user.company.catchPhrase;

		post.append(postId);
		post.append(title);
		post.append(body);

		post.append(userId);
		post.append(name);
		post.append(username);
		post.append(email);
		post.append(phone);
		post.append(website);
		post.append(address);
		post.append(company);
		document.getElementById('tbody').append(post);
	});
}());