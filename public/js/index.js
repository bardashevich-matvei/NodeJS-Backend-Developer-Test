(async function () {
	let data = await fetch('https://jsonplaceholder.typicode.com/posts', {
		method: 'GET',
		headers: {
			'Content-Type': 'application/json;charset=utf-8'
		},
	});
	data = await data.json();
	document.getElementById('caption').innerHTML = data.length;
}());