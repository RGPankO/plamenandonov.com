'use strict';

const gulp         = require('gulp');
const sass         = require('gulp-sass');
const postcss      = require('gulp-postcss');
const sourcemaps   = require('gulp-sourcemaps');
const autoprefixer = require('gulp-autoprefixer');
const inject       = require('gulp-inject');

const paths = {
  src: './src/**/*',
  srcHTML: './src/html/**/*.html',
  srcIMG: './src/img/**/*.{png,gif,jpg,svg}',
  srcCSS: './src/css/**/*.css',
  srcSCSS: './src/sass/**/*.scss',
  srcJS: './src/js/**/*.js',
  inject: './public/**/*.html',
  injectCSS: './public/css/**/*.css',
  injectJS: './public/js/**/*.js',
  injectJSDep: './public/vendor/jquery.min.js',
  dist: './public/',
  distHTML: './public/',
  distCSS: './public/css/',
  distJS: './public/js',
  distJSDep: './public/vendor',
  distIMG: './public/img',
  distIMAGES: './public/images',
  libsCSS: ['./node_modules/lightbox2/dist/css/lightbox.min.css'],
  libsJS: ['./node_modules/lightbox2/dist/js/lightbox.min.js',
  './node_modules/bootstrap/dist/js/bootstrap.min.js'],
  libsJSDep: ['./node_modules/jquery/dist/jquery.min.js'],
  libsIMG: ['./node_modules/lightbox2/dist/images/close.png',
  './node_modules/lightbox2/dist/images/loading.gif',
  './node_modules/lightbox2/dist/images/next.png',
  './node_modules/lightbox2/dist/images/prev.png']
};



gulp.task('img', function () {
  return gulp.src(paths.srcIMG).pipe(gulp.dest(paths.distIMG));
});

gulp.task('copy:libs:css', function () {
  return gulp.src(paths.libsCSS).pipe(gulp.dest(paths.distCSS));
});

gulp.task('copy:libs:jsDep', function () {
  return gulp.src(paths.libsJSDep).pipe(gulp.dest(paths.distJSDep));
});

gulp.task('copy:libs:js', function () {
  return gulp.src(paths.libsJS).pipe(gulp.dest(paths.distJS));
});

gulp.task('copy:libs:img', function () {
  return gulp.src(paths.libsIMG).pipe(gulp.dest(paths.distIMAGES));
});

gulp.task('html', function () {
  gulp.start('inject');
  return gulp.src(paths.srcHTML).pipe(gulp.dest(paths.distHTML));
});

gulp.task('html:watch', function () {
  gulp.watch(paths.srcHTML, ['html']);
});

gulp.task('css', function () {
  return gulp.src(paths.srcCSS).pipe(gulp.dest(paths.distCSS));
});

gulp.task('css:watch', function () {
  gulp.watch(paths.srcCSS, ['css']);
});

gulp.task('sass', function () {
  return gulp.src(paths.srcSCSS)
  .pipe(sourcemaps.init())
  .pipe(sass().on('error', sass.logError))
  .pipe(autoprefixer({
      browsers: ['last 2 versions'],
      cascade: false
  }))
  .pipe(sourcemaps.write())
  .pipe(gulp.dest(paths.distCSS));
});

gulp.task('sass:watch', function () {
  gulp.watch(paths.srcSCSS, ['sass']);
});

gulp.task('inject', ['sass','css','html','copy:libs:css','copy:libs:img','copy:libs:js','copy:libs:jsDep'], function () {
  gulp.src(paths.inject)
  .pipe(inject(gulp.src(paths.injectJSDep, {read: false}), {name: 'inject-jsDep',relative: true}))
  .pipe(inject(gulp.src([paths.injectCSS,paths.injectJS], {read: false}), {relative: true}))
  .pipe(gulp.dest(paths.distHTML));
});

gulp.task('inject:watch', function () {
  gulp.watch(paths.inject, ['inject']);
});


gulp.task('build', function () {
  gulp.start('img');
  gulp.start('sass');
  gulp.start('css');
  gulp.start('copy:libs:css');
  gulp.start('copy:libs:js');
  gulp.start('copy:libs:jsDep');
  gulp.start('copy:libs:img');
  gulp.start('html');
});


gulp.task('watch', function () {
  gulp.start('img');
  gulp.start('sass');
  gulp.start('css');
  gulp.start('copy:libs:css');
  gulp.start('copy:libs:js');
  gulp.start('copy:libs:jsDep');
  gulp.start('copy:libs:img');
  gulp.start('html');
  gulp.start('sass:watch');
  gulp.start('css:watch');
  gulp.start('html:watch');
});
