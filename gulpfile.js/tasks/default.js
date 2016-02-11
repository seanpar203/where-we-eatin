var gulp        = require('gulp');
var runSequence = require('run-sequence');

gulp.task('default', function(cb) {
  runSequence('clean', [ 'sass', 'images', 'fonts', 'extras', 'html' ], 'live-update', cb);
});
