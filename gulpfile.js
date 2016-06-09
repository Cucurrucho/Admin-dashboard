var gulp = require('gulp');
var sass = require('gulp-sass');
var notify = require("gulp-notify");
var sourcemaps = require('gulp-sourcemaps');

gulp.task('sass', function () {
    return gulp.src('assets/stylesheets/bootstrap.scss')
        .pipe(sourcemaps.init())
        .pipe(sass().on('error', sass.logError))
        .pipe(sourcemaps.write('maps'))
        .pipe(gulp.dest('assets/css/'))
        .pipe(notify('SASS compiled'));
});

gulp.task('default',['sass'],function(){

    gulp.watch("assets/stylesheets/bootstrap.scss'",['sass']);
});