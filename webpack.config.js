var path = require('path');
var webpack = require('webpack');

module.exports = {
        devtool: 'cheap-module-eval-source-map',
		entry: [
		    'webpack-hot-middleware/client',
			'./index.js'
		],
		output: {
			path: path.join(__dirname,'build'),
			filename: 'bundle.js',
			publicPath: '/static/'
		},
		plugins: [
            new webpack.optimize.OccurenceOrderPlugin(),
    		new webpack.HotModuleReplacementPlugin(),
            new webpack.NoErrorsPlugin()
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