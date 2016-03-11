import webpack from 'webpack';
import path from 'path';
import config from './webpack.config';

config.devtool = 'sourcemap';

config.debug = true;

config.watch = true;

export default config;
