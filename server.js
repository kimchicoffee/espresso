import http from 'http';
import express from 'express';
import path from 'path';

import webpack from 'webpack';
import WebpackDevServer from 'webpack-dev-server';
import config from './webpack.config';

const app = express();

app.use(express.static(path.join(__dirname, 'build')));

http.createServer(app).listen(1337, '127.0.0.1');

console.log('Server running at http://127.0.0.1:1337/');

app.get('/', function (req, res, next) {
	res.sendFile(path.join(__dirname,'index.html'),function(){
		console.log('first page is loaded!')
	});
});



new WebpackDevServer(webpack(config), {
  publicPath: config.output.publicPath,
  hot: true,
  historyApiFallback: true
}).listen(3000, 'localhost', function (err, result) {
  if (err) {
    console.log(err);
  }

  console.log('Listening at localhost:3000');
});