var gulp   = require('gulp');
var eslint = require('gulp-eslint');
var config = require('../config').js;

gulp.task('lint-js', function () {
  return gulp.src(config.src)
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(eslint.failOnError());
});
