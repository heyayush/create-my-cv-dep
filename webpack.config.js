"use strict";
const webpack = require('webpack'); //to access built-in plugins
const path = require('path'); //default node module
var DIST_PATH = path.resolve( __dirname, 'docs' );
var SOURCE_PATH = path.resolve( __dirname, 'src' );
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
	template: './src/index.html',
	filename: 'index.html',
	inject: 'body'
});


module.exports = {
	entry: SOURCE_PATH +'/index.js',
	output: {
		path: DIST_PATH,
		filename: 'my-bundle.js'
	},
	module: {
		rules: [
			{
				test: /\.scss$/,
				exclude: /node_modules/,
				use: [{
					loader: 'style-loader'
				},{
					loader: 'css-loader'
				},{
					loader: 'sass-loader'
				}]
			},
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: 'babel-loader'
			},
			{
				test: /\.jpg$/,
				exclude: /node_modules/,
				use: 'file-loader'
			},
			{
				test: /\.jsx$/,
				exclude: /node_modules/,
				use: 'babel-loader'
				// options: {
				// 	presets: ['env'],
				// 	cacheDirectory: true
				// }
			}
		]
	},
	plugins: [
		new webpack.optimize.UglifyJsPlugin(),
		HtmlWebpackPluginConfig
	],
	// devtool: "cheap-eval-source-map",
	devServer: {
		contentBase: path.join("dist"),
		compress: true,
		port: 9000
	}
};
