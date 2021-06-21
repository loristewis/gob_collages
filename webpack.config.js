const webpack = require('webpack');
const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

const config = {
	entry: './src/index.js',
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'bundle.js'
	},
	devServer: {
		contentBase: path.join(__dirname, 'dist'),
		port: 8090,
	},
	module: {
		rules: [
			{
				test: /\.vue$/,
				loader: 'vue-loader'
			},
			{
				test: /\.js$/,
				use: 'babel-loader',
				exclude: /node_modules/
			},
			{
				test: /\.scss$/,
				use: [
					'vue-style-loader',
					'css-loader',
					'sass-loader'
				]
			},
			{
				test: /\.png$/,
				use: [
					{
						loader: 'url-loader',
						options: {
							mimetype: 'image/png'
						}
					}
				]
			},
			{
				test: /\.jpg$/,
				use: [
					{
						loader: 'url-loader',
						options: {
							mimetype: 'image/jpg'
						}
					}
				]
			},
			{
				test: /\.svg$/,
				use: 'file-loader'
			},
			{
				test: /\.(woff|woff2|eot|ttf|otf)$/i,
				type: 'asset/resource',
			},
			{
				test: /\.(mov|mp4|ogg|vtt)$/,
				type: 'asset/resource',
			}
		]
	},
	resolve: {
		extensions: [
			'.js',
			'.vue'
		]
	},
	plugins: [
		new VueLoaderPlugin(),
		new BundleAnalyzerPlugin()
	]
};

module.exports = config;
