import gulp from 'gulp';
import webpack from 'webpack';
import colorsSupported from 'supports-color';
import gutil from 'gulp-util';
import del from 'del';

gulp.task('clean:js', (cb) => {
  del([
    './public/js/*'
  ]).then(paths => {
    cb();
  });
});

gulp.task('build:js', ['clean:js'], () => {
  let config;
  if(gutil.env.prod) {
    config = require('./../webpack.prod.config').default;
  } else {
    config = require('./../webpack.dev.config').default;
  }

  config.entry = './app/index.js';
  config.output.path = './public/js';

  webpack(config, (err, stats) => {
    if(err) {
      throw new gutil.PluginError('webpack', err);
    }
    gutil.log('[webpack]', stats.toString({
      colors: colorsSupported,
      chunks: false,
      errorDetails: true
    }));
  });
});
