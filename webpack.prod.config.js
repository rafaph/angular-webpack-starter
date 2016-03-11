import webpack from 'webpack';
import config from './webpack.config';

config.plugins = [
  new webpack.optimize.UglifyJsPlugin({
    mangle: false
  })
];

export default config;
