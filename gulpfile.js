var gulp = require('gulp'),
  sourcemaps = require('gulp-sourcemaps'),
  concat = require('gulp-concat'),
  uglify = require('gulp-uglify'),
  sass = require('gulp-sass'),
  gutil = require('gulp-util');

var CacheBuster = require('gulp-cachebust');
var cachebust = new CacheBuster();

gulp.task('clean', function () {
  var del = require('del');
  return del(['dist']);
});

gulp.task('bower', function () {
  var install = require("gulp-install");
  return gulp.src(['./bower.json'])
    .pipe(install());
});

gulp.task('build-css', function () {
  return gulp.src('app/styles/app.scss')
    .pipe(sourcemaps.init())
    .pipe(sass())
    .pipe(cachebust.resources())
    .pipe(sourcemaps.write('./maps'))
    .pipe(gulp.dest('./dist/styles'));
});

gulp.task('build-template-cache', function () {
  var ngHtml2Js = require("gulp-ng-html2js");

  return gulp.src("./app/views/**/*.html")
    .pipe(ngHtml2Js({
      moduleName: "myApp",
      prefix: "views/"
    }))
    .pipe(concat("templateCachePartials.min.js"))
    .pipe(uglify())
    .pipe(cachebust.resources())
    .pipe(gulp.dest("./dist/scripts"));
});

gulp.task('build-js', function () {
  return gulp.src('app/scripts/**/*.js')
    .pipe(sourcemaps.init())
    .pipe(concat('bundle.min.js'))
    .pipe(uglify())
    .pipe(cachebust.resources())
    .pipe(sourcemaps.write('./maps'))
    .pipe(gulp.dest('dist/scripts'));
});

gulp.task('jshint', function () {
  var jshint = require('gulp-jshint');

  gulp.src(['app/scripts/**/*.js', 'test/**/*.js'])
    .pipe(jshint())
    .pipe(jshint.reporter('default'));
});

gulp.task('watch', function () {
  return gulp.watch(
    ['app/index.html', 'app/views/**/*.html', 'app/styles/**/*.scss', 'app/scripts/**/*.js'],
    ['build']);
});

gulp.task('browsersync', function () {
  var browserSync = require('browser-sync');

  browserSync.init({
    files: ['dist/**/*.*'],
    proxy: 'http://localhost:5000',
    open: false
  });
});

gulp.task('build', ['build-css', 'build-template-cache', 'build-js', 'jshint'], function () {
  return gulp.src('app/index.html')
    .pipe(cachebust.references())
    .pipe(gulp.dest('dist'));
});

gulp.task('build-heroku', ['bower', 'build-css', 'build-template-cache', 'build-js'], function () {
  return gulp.src('app/index.html')
    .pipe(cachebust.references())
    .pipe(gulp.dest('dist'));
});

gulp.task('dev', ['watch', 'browsersync']);

gulp.task('default', function (cb) {
  var runSequence = require('run-sequence');
  runSequence('clean', ['bower', 'build'], cb);
});
