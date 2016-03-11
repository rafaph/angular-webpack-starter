import gulp from 'gulp';
import del from 'del';

const FILES = [
  './node_modules/bootstrap/dist/fonts/*',
];

gulp.task('clean:fonts', (cb) => {
  del([
    './public/fonts/*'
  ]).then(paths => {
    cb();
  });
});

gulp.task('build:fonts', ['clean:fonts'], () => {
  return gulp.src(FILES)
    .pipe(gulp.dest('./public/fonts'));
});
