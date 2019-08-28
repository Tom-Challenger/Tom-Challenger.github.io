const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = {
	mode: 'development',

	//watch: true,

	entry: { main: './src/index.js'},
	output: {
		path: path.resolve(__dirname, 'build'),
		filename: 'index.js'
	},


	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader'
				}
			},
			{
				test: /\.css$/,
				use: [
					{
						loader: MiniCssExtractPlugin.loader,
						options: {
							publicPath: './build'
						}
					}, 
					/*'style-loader',*/
					'css-loader'
				]
			}
		]
	},

	devtool: 'inline-source-map',

	plugins: [ 
		//new webpack.ProgressPlugin(),
		new CleanWebpackPlugin({
			verbose: true,
			cleanStaleWebpackAssets: true,
		}),
		new HtmlWebpackPlugin({
			template: './src/index.html',
			title: 'Personal Page',
			filename: 'index.html'
		}),
		new MiniCssExtractPlugin({
			filename: 'style.css'
		})
	],

	devServer: {
		host: 'localhost',
		port: '8080',
		open: true,
		contentBase: path.join(__dirname, 'build'),
		index: 'index.html',
		inline: true
		///clientLogLevel: 'silent',
		//contentBase: path.join(__dirname, 'build')
		//index: 'index.html',
		//inline: true,
		//watchContentBase: true,
		//hot: true
	}
}