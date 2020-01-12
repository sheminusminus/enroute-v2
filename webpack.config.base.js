/**
 * webpack.config.base.js
 * @fileOverview Webpack shared configuration file.
 */

const path = require('path');

const SRC_FOLDER = path.join(__dirname, 'src');
const DIST_FOLDER = path.join(__dirname, 'public');

module.exports = {
  entry: {
    app: path.join(SRC_FOLDER, 'index.js'),
  },
  output: {
    publicPath: '/',
    path: DIST_FOLDER,
    filename: 'dist/[name].[chunkhash].js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'eslint-loader',
        enforce: 'pre',
        query: {
          configFile: './.eslintrc',
        },
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: /\.css$/,
        loaders: ['style-loader', 'css-loader?modules&importLoaders=true&sourceMap', 'postcss-loader'],
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        loaders: [
          'file-loader?hash=sha512&digest=hex&name=[hash].[ext]',
        ],
      },
    ],
  },
  resolve: {
    alias: {
      modules: path.resolve(__dirname, '../src/modules'),
    },
    modules: [
      path.join(__dirname, './'),
      path.join(__dirname, './node_modules'),
    ],
    extensions: ['.js', '.jsx'],
  },
};
