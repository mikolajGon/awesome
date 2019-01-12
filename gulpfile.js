'use strict';

var
  gulp = require('gulp'),
  gulpSass = require('gulp-sass'),
  gulpSourcemaps = require('gulp-sourcemaps'),
  del = require('del');



gulp.task('compileSass', function () {
  return gulp.src('scss/main.scss')
    .pipe(gulpSourcemaps.init())
    .pipe(gulpSass())
    .pipe(gulpSourcemaps.write('./'))
    .pipe(gulp.dest('css'));
});

gulp.task('watchFiles', function () {
  gulp.watch(['scss/*.scss', 'scss/partials/*.scss', 'scss/partials/components/*.scss'], gulp.parallel('compileSass'));
});

gulp.task('clean', function (done) {
  del(['build', 'css/*.css*']);
  done();
});

gulp.task('serve', gulp.series('watchFiles'));

gulp.task('build', gulp.series('compileSass', function () {
  return gulp.src(['css/main.css', 'index.html', 'img/**'], { base: './' })
    .pipe(gulp.dest('build'));
}));

gulp.task('default', gulp.series('clean', function (done) {
  gulp.start('build');
  done();
}));