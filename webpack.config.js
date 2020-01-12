/**
 * webpack.config.js
 * @fileOverview Webpack configuration file for development.
 */

const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

const DIST_FOLDER = path.join(__dirname, 'public');
const SRC_FOLDER = path.join(__dirname, 'src');

const config = require('./webpack.config.base');

config.mode = 'development';

config.entry = [
  'react-hot-loader/patch',
  // activate HMR for React

  'webpack-dev-server/client?http://localhost:1337',
  // bundle the client for webpack-dev-server
  // and connect to the provided endpoint

  'webpack/hot/only-dev-server',
  // bundle the client for hot reloading
  // only- means to only hot reload for successful updates

  path.join(SRC_FOLDER, 'index.js'),
];

config.output.filename = 'dist/[name].[hash].js';

config.devServer = {
  proxy: {
    '/api': 'http://localhost:3000',
  },
  contentBase: DIST_FOLDER,
  compress: true,
  port: 1337,
  hot: true,
  publicPath: '/',
  historyApiFallback: true,
};

config.plugins = [
  new webpack.HotModuleReplacementPlugin(), // enable HMR globally
  new webpack.NamedModulesPlugin(),
  new HtmlWebpackPlugin({ // also generate an index.html
    filename: 'index.html',
    template: 'src/static/html/index.ejs',
  }),
];

config.devtool = 'source-map';

module.exports = config;
