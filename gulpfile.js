var gulp = require('gulp');
var sass = require('gulp-sass');
var notify = require("gulp-notify");
var sourcemaps = require('gulp-sourcemaps');
var data = require('gulp-data');
var fs = require('fs');
var path = require('path');
var mustache = require('gulp-mustache');
var minifyjs = require('gulp-minify');
var concat = require('gulp-concat');
var autoprefixer = require('gulp-autoprefixer');
var plumber = require('gulp-plumber');
var browserSync = require('browser-sync').create();

gulp.task('browser-sync', function () {
	browserSync.init({
		proxy: "localhost/admin-dashboard/public"
	});
});

gulp.task('sass', function () {
	return gulp.src('assets/stylesheets/bootstrap.scss')
		.pipe(plumber())
		.pipe(sourcemaps.init())
		.pipe(sass().on('error', sass.logError))
		/*        .pipe(autoprefixer({
		 browsers: ['last 2 versions'],
		 cascade: false
		 }))*/
		.pipe(sourcemaps.write('maps'))
		.pipe(gulp.dest('assets/css/'))
		.pipe(notify({message: 'SASS compiled', onLast: true}))
		.pipe(browserSync.reload({stream: true}));
});

gulp.task('js', function () {
	return gulp.src('assets/javascripts/extras/*.js')
		.pipe(plumber())
		.pipe(minifyjs({noSource: true}))
		.pipe(concat('main.js', {newLine: ''}))
		.pipe(gulp.dest("assets/javascripts"))
		.pipe(notify({message: 'Js Updated', onLast: true}))
		.pipe(browserSync.reload({stream: true}));
});


gulp.task('mustache', function () {
	return gulp.src('assets/templates/*.html')
		.pipe(plumber())
		.pipe(data(function(file) {
			return JSON.parse(fs.readFileSync('assets/templates/views/' + path.basename(file.path,".html") + '.json'));
		}))
		.pipe(mustache())
		.pipe(gulp.dest('public'))
		.pipe(notify({message: 'Hogan compiled', onLast: true}))
		.pipe(browserSync.reload({stream: true}));
});

gulp.task('default', ['sass', 'mustache', 'js', 'browser-sync'], function () {

	gulp.watch("assets/stylesheets/extras/*.scss", ['sass']);
	gulp.watch("assets/javascripts/extras/*.js", ['js']);
	gulp.watch(["assets/templates/**/*.html","assets/templates/**/*.mustache","assets/templates/**/*.json"], ['mustache']);
});