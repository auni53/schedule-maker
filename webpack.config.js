var webpack = require('webpack');
var path = require('path');
require("url-loader?mimetype=image/png!./file.png");

var BUILD_DIR = path.resolve(__dirname, 'src/');
var APP_DIR = path.resolve(__dirname, 'src/app');

var config = {
  entry: APP_DIR + '/index.jsx',
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.jsx?/,
        include: APP_DIR,
        loader: 'babel'
      },
      {
        test: /\.png$/,
        loader: "url-loader",
        include: APP_DIR,
        query: { mimetype: "image/png" }
      }
    ]
  }
};

module.exports = config;
