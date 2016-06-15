var gulp = require('gulp');
var sass = require('gulp-sass');
var notify = require("gulp-notify");
var sourcemaps = require('gulp-sourcemaps');
var hogan = require('gulp-hogan');
var minifyjs = require('gulp-minify');
var concat = require('gulp-concat');

gulp.task('sass', function () {
    return gulp.src('assets/stylesheets/bootstrap.scss')
        .pipe(sourcemaps.init())
        .pipe(sass().on('error', sass.logError))
        .pipe(sourcemaps.write('maps'))
        .pipe(gulp.dest('assets/css/'))
        .pipe(notify('SASS compiled'));
});

gulp.task('js',function(){
    return gulp.src('assets/javascripts/extras/*.js')
        .pipe(minifyjs({noSource : true}))
        .pipe(concat('main.js',{newLine: ''}))
        .pipe(gulp.dest("assets/javascripts"))
        .pipe(notify('Js Updated'));
});

gulp.task('hogan', function () {
    return gulp.src('assets/templates/*.html')
        .pipe(hogan({}, null, '.html'))
        .pipe(gulp.dest('public'))
        .pipe(notify('Hogan compiled'));
});

gulp.task('default',['sass','hogan','js'],function(){

    gulp.watch("assets/stylesheets/extras/*.scss",['sass']);
    gulp.watch("assets/javascripts/extras/*.js",['js']);
    gulp.watch("assets/templates/**/*.html",['hogan']);
});