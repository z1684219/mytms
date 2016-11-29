// Generated by CoffeeScript 1.11.1
(function() {
  var browserSync, del, gulp, minifyCss, runSequence, uglify;

  gulp = require('gulp');

  del = require('del');

  runSequence = require('run-sequence');

  uglify = require('gulp-uglify');

  minifyCss = require('gulp-minify-css');

  browserSync = require('browser-sync').create();

  gulp.task('default', function(callback) {
    return runSequence(['clean'], ['build'], ['server', 'watch'], callback);
  });

  gulp.task('clean', function(callback) {
    return del(['./dist'], callback);
  });

  gulp.task('build', function(callback) {
    return runSequence(['copy', 'minijs', 'minicss'], callback);
  });

  gulp.task('copy', function() {
    return gulp.src('./src/**/*.*').pipe(gulp.dest('./dist/'));
  });

  gulp.task('minijs', function() {
    return gulp.src('./src/**/*.js').pipe(uglify()).pipe(gulp.dest('./dist/'));
  });

  gulp.task('minicss', function() {
    return gulp.src('./src/**/*.css').pipe(minifyCss()).pipe(gulp.dest('./dist/'));
  });

  gulp.task('concat', function() {
    return gulp.src('./src/*.js').pipe(concat('all.js', {
      newLine: ';\n'
    })).pipe(gulp.dest('./dist/'));
  });

  gulp.task('server', function() {
    return browserSync.init({
      server: {
        baseDir: './dist/'
      },
      port: 7411
    });
  });

  gulp.task('watch', function() {
    return gulp.watch('./src/**/*.*', ['reload']);
  });

  gulp.task('reload', function(callback) {
    return runSequence(['copy', 'minijs', 'minicss'], ['reload-browser'], callback);
  });

  gulp.task('reload-browser', function() {
    return browserSync.reload();
  });

}).call(this);

//# sourceMappingURL=gulpfile.js.map
