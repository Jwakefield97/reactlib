const path = require('path'),
	  nodeExternals = require('webpack-node-externals');
module.exports = env => {
	env = env || {};
	return {
		entry: ['babel-polyfill',"isomorphic-fetch",'./src/index.js'],
		output: {
			path: path.resolve(__dirname, "dist"),
			filename: 'reactlib.js',
			sourceMapFilename: 'reactlib.map.js',
			library: '',
    		libraryTarget: 'commonjs'
		},
		externals: [nodeExternals()],
		module: {
			rules: [
				{
					test: /\.js$/,
					exclude: /(node_modules|bower_components)/,
					loader: 'babel-loader',
					options: {
					  presets: ['@babel/preset-env', '@babel/react']
					}
				  },{
					test: /\.css$/,              //rules for loading css in components 
  					loader: 'style-loader!css-loader'
				}
			]
		}, 
		devtool: "#source-map",
		devServer: {
			contentBase: "./dist", 
			historyApiFallback: true 
		}
	}
}
