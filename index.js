import http from 'http';
import express from 'express';
import path from 'path';

const app = express();

http.createServer(app).listen(1337, '127.0.0.1');

console.log('Server running at http://127.0.0.1:1337/');

app.get('/', function (req, res, next) {
	res.sendFile(path.join(__dirname,'index.html'),function(){
		console.log('first page is loaded!')
	});
});