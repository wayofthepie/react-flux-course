'use strict';

let gulp = require('gulp');
let connect = require('gulp-connect');
let open = require('gulp-open');
let browserify = require('browserify');
let babelify = require('babelify'); // jsx to js
let source = require('vinyl-source-stream'); // use conventional text streams with gulp
let concat = require('gulp-concat'); // concatenates files
let lint = require('gulp-eslint'); // lint js/jsx

let config = {
  port: 9005,
  devBaseUrl: 'http://localhost',
  paths: {
    html: './src/*.html',
    js: './src/**/*.js',
    images: './src/images/*',
    css: [
      'node_modules/bootstrap/dist/css/bootstrap.min.css',
      'node_modules/bootstrap/dist/css/bootstrap-theme.min.css',
      'node_modules/toastr/build/toastr.css',
    ],
    dist: './dist/',
    mainJs: './src/main.js'
  }
};

gulp.task('connect', function () {
  connect.server({
    root: ['dist'],
    port: config.port,
    base: config.devBaseUrl,
    livereload: true
  });
});

gulp.task('open', ['connect'], function () {
  gulp.src('dist/index.html').pipe(open({uri: config.devBaseUrl + ':' + config.port + '/'}))
});

gulp.task('html', function () {
  gulp.src(config.paths.html)
      .pipe(gulp.dest(config.paths.dist))
      .pipe(connect.reload());
});

gulp.task('js', function () {
  browserify(config.paths.mainJs)
    .transform(babelify, {presets: ["es2015", "react"]})
    .bundle()
    .on('error', console.error.bind(console))
    .pipe(source('bundle.js'))
    .pipe(gulp.dest(config.paths.dist + '/scripts'))
    .pipe(connect.reload());
});

gulp.task('css', function () {
  gulp.src(config.paths.css)
      .pipe(concat('bundle.css'))
      .pipe(gulp.dest(config.paths.dist + '/css'));
});

gulp.task('images', function () {
  gulp.src(config.paths.images)
      .pipe(gulp.dest(config.paths.dist + '/images'))
      .pipe(connect.reload());

  gulp.src('./src/favicon.ico')
      .pipe(gulp.dest(config.paths.dist));
});

gulp.task('lint', function () {
  return gulp.src(config.paths.js)
             .pipe(lint({configFile: '.eslintrc.yml'}))
             .pipe(lint.format());
});

gulp.task('watch', function () {
  gulp.watch(config.paths.html, ['html']);
  gulp.watch(config.paths.js, ['js', 'lint']);
});

gulp.task('default', ['html', 'css', 'js', 'images', 'lint', 'open', 'watch']);