var gulp = require('gulp');
var deploy = require("gulp-gh-pages");
var rimraf = require('gulp-rimraf');

gulp.task('clean', function (cb) {
  return gulp.src('./dist/**', { read: false })
    .pipe(rimraf());
});

gulp.task('copy', function() {
  return gulp.src('./src/index.html')
    .pipe(gulp.dest('./dist'));
});

gulp.task('deploy', function () {
  return gulp.src("./dist/**/*")
    .pipe(deploy());
});

gulp.task('default', ['clean', 'copy']);
