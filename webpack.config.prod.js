/**
 * webpack.config.prod.js
 * @fileOverview Webpack configuration file for production.
 */

const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

const DIST_FOLDER = path.join(__dirname, 'dist/public');
const SRC_FOLDER = path.join(__dirname, 'src');

const config = require('./webpack.config.base');

config.mode = 'production';

config.entry = {
  app: path.join(SRC_FOLDER, 'index.js'),
  vendor: [
    'react',
    'react-dom',
    'react-router',
    'react-router-dom',
    'redux',
    'redux-saga',
    'react-redux',
    'lodash',
    'moment',
  ],
};

config.output.path = DIST_FOLDER;

config.plugins = [
  new webpack.DefinePlugin({
    'process.env': {
      NODE_ENV: JSON.stringify('production'),
    },
  }),
  new HtmlWebpackPlugin({ // also generate an index.html
    filename: 'index.html',
    template: 'src/static/html/index.ejs',
  }),
  new webpack.HashedModuleIdsPlugin(),
];

module.exports = config;
