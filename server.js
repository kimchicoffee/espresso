import http from 'http';
import express from 'express';
import path from 'path';
import fs from 'fs';
import mongoose from 'mongoose';
import handlebars from 'handlebars';

import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import config from './webpack.config';


//Connet to database
//mongoose.connect('mongodb://localhost/pasdesujin-dev');
//mongoose.connection.on('connected', function() {
//	console.log('mongoose is connected to mongodb://localhost/pasdesujin-dev');
//});

let app = express();
let port = 3000;

//compile handlebars to html
let rawhtml = fs.readFileSync(path.join(__dirname,'index.html'), 'utf8');
let template = handlebars.compile(rawhtml);
let output = template({
  title : "pasdesujin"
});

// route
app.get('/', function (req, res, next) {
	res.send(output);
});

let compiler = webpack(config)
app.use(webpackDevMiddleware(compiler, { noInfo: true, publicPath: config.output.publicPath }))
app.use(webpackHotMiddleware(compiler))

app.listen(port, function(error) {
  if (error) {
    console.error(error);
  } else {
    console.info("==> 🌎  Listening on port %s. Open up http://localhost:%s/ in your browser.", port, port);
  }
})