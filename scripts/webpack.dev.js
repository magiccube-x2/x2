const path = require('path');
const webpack = require('webpack');

const config = require('./webpack.base');

config.mode = 'development';
config.devServer = {
  contentBase: path.resolve('./public'),
  hot: true,
  port: 8088
};
config.plugins.push(new webpack.HotModuleReplacementPlugin());

module.exports = config;
