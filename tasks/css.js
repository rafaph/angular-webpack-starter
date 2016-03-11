import gulp from 'gulp';
import del from 'del';

const FILES = [
  './node_modules/bootstrap/dist/css/bootstrap.min.css',
];

gulp.task('clean:css', (cb) => {
  del([
    './public/css/*'
  ]).then(paths => {
    cb();
  });
});

gulp.task('build:css', ['clean:css'], () => {
  return gulp.src(FILES)
    .pipe(gulp.dest('./public/css'));
});
