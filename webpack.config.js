var path = require('path');
var webpack = require('webpack');

module.exports = {
		entry: [
		    'webpack-dev-server/client?http://0.0.0.0:3000',
    		'webpack/hot/only-dev-server',
			'./index.js'
		],
		output: {
			path: path.join(__dirname,'/build'),
			filename: 'bundle.js',
			publicPath: '/static/'
		},
		plugins: [
    		new webpack.HotModuleReplacementPlugin()
  		],
    	module: {
    		loaders: [{
        		test: /\.js?$/,
        		loaders: ['react-hot','babel'],
        		exclude: /node_modules/
    		}]
    	}
}