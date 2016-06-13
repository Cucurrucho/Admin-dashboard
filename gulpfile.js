var gulp = require('gulp');
var sass = require('gulp-sass');
var notify = require("gulp-notify");
var sourcemaps = require('gulp-sourcemaps');
var hogan = require('gulp-hogan');

gulp.task('sass', function () {
    return gulp.src('assets/stylesheets/bootstrap.scss')
        .pipe(sourcemaps.init())
        .pipe(sass().on('error', sass.logError))
        .pipe(sourcemaps.write('maps'))
        .pipe(gulp.dest('assets/css/'))
        .pipe(notify('SASS compiled'));
});

gulp.task('hogan', function () {
    return gulp.src('assets/templates/*.html')
        .pipe(hogan({}, null, '.html'))
        .pipe(gulp.dest('public'))
        .pipe(notify('Hogan compiled'));
});

gulp.task('default',['sass','hogan'],function(){

    gulp.watch("assets/stylesheets/extras/*.scss",['sass']);
    gulp.watch("assets/templates/**/*.html",['hogan']);
});