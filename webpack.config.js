var path = require('path');
var webpack = require('webpack');

module.exports = {
		entry: [
		    'webpack-dev-server/client?http://0.0.0.0:3000', //0.0.0.0 allow access from same WiFi network
    		'webpack/hot/only-dev-server', // "only" prevents reload on syntax errors
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
    		loaders: [
    		{
        		test: /\.js?$/,
        		loaders: [ 'react-hot', 'babel' ],
        		exclude: /node_modules/
    		},
    		{
    			test: /\.scss$/,
    			loaders: [ 'style', 'css', 'sass']
    		}
    		]
    	}
}