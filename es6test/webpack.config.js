const path = require('path')
const webpack = require('webpack')

module.exports = {

  entry: {
    app: './dev/js/index.js',
    style: './dev/style/style.js'
  },

  output: {
    path: __dirname + '/public',
    filename: '[name].js'
  },

  devtool: 'source-map',

  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader',
      },
      {
        test: /\.sass$/,
        loader: 'style-loader!css-loader!sass-loader',
      },
    ],
  },

  devServer: {
    contentBase: __dirname + '/public'
  }
};
