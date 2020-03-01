const index = require('../index');
const debug = require('debug')('sampleindex:server');
const http = require('http');
const mongoose = require('mongoose');
const port = normalizePort(process.env.PORT || '3000');
index.set('port', port);

const server = http.createServer(index);

mongoose.connect('mongodb://localhost:27017/main', { useNewUrlParser: true }, function(err){
	if (err) return console.log(err);
	console.log('mongo started');
	server.listen(port, function () {
		console.log('server started on http://localhost:3000/');
	});
});
server.on('error', onError);
server.on('listening', onListening);

function normalizePort(val) {
	const port = parseInt(val, 10);

	if (isNaN(port)) {
		// named pipe
		return val;
	}

	if (port >= 0) {
		// port number
		return port;
	}

	return false;
}

/**
 * Event listener for HTTP server "error" event.
 */

function onError(error) {
	if (error.syscall !== 'listen') {
		throw error;
	}

	const bind = typeof port === 'string'
		? 'Pipe ' + port
		: 'Port ' + port;

	// handle specific listen errors with friendly messages
	switch (error.code) {
	case 'EACCES':
		console.error(bind + ' requires elevated privileges');
		process.exit(1);
		break;
	case 'EADDRINUSE':
		console.error(bind + ' is already in use');
		process.exit(1);
		break;
	default:
		throw error;
	}
}

/**
 * Event listener for HTTP server "listening" event.
 */

function onListening() {
	const addr = server.address();
	const bind = typeof addr === 'string'
		? 'pipe ' + addr
		: 'port ' + addr.port;
	debug('Listening on ' + bind);
}
