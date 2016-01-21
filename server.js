import http from 'http';
import express from 'express';
import path from 'path';
import fs from 'fs';
import mongoose from 'mongoose';

import webpack from 'webpack';
import WebpackDevServer from 'webpack-dev-server';
import config from './webpack.config';

import handlebars from 'handlebars';

//Connet to database
mongoose.connect('mongodb://localhost/pasdesujin-dev');
mongoose.connection.on('connected', function() {
	console.log('mongoose is connected to mongodb://localhost/pasdesujin-dev');
});

let app = express();

app.use(express.static(path.join(__dirname, 'static')));

let rawhtml = fs.readFileSync(path.join(__dirname,'index.html'), 'utf8');
let template = handlebars.compile(rawhtml);
let output = template({
  title : "pasdesujin"
});

http.createServer(app).listen(1337, '0.0.0.0');

console.log('Server running at http://0.0.0.0:1337/');

app.get('/', function (req, res, next) {
	res.send(output);
});



new WebpackDevServer(webpack(config), {
  publicPath: config.output.publicPath,
  hot: true,
  historyApiFallback: true
}).listen(3000, '0.0.0.0', function (err, result) {
  if (err) {
    console.log(err);
  }

  console.log('Listening at 0.0.0.0:3000');
});