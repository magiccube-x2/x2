const path = require('path');

const config = require('./webpack.base');

config.mode = 'development';
config.devServer = {
  contentBase: path.resolve('./public'),
  hot: true,
  port: 8088
};

module.exports = config;
