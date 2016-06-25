var gulp = require('gulp');
var sass = require('gulp-sass');
var notify = require("gulp-notify");
var sourcemaps = require('gulp-sourcemaps');
var hogan = require('gulp-hogan');
var minifyjs = require('gulp-minify');
var concat = require('gulp-concat');
var autoprefixer = require('gulp-autoprefixer');

gulp.task('sass', function () {
    return gulp.src('assets/stylesheets/bootstrap.scss')
        .pipe(sourcemaps.init())
        .pipe(sass().on('error', sass.logError))
/*        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))*/
        .pipe(sourcemaps.write('maps'))
        .pipe(gulp.dest('assets/css/'))
        .pipe(notify({message: 'SASS compiled', onLast: true}));
});

gulp.task('js',function(){
    return gulp.src('assets/javascripts/extras/*.js')
        .pipe(minifyjs({noSource : true}))
        .pipe(concat('main.js',{newLine: ''}))
        .pipe(gulp.dest("assets/javascripts"))
        .pipe(notify({message: 'Js Updated', onLast: true}));
});

gulp.task('hogan', function () {
    return gulp.src('assets/templates/*.html')
        .pipe(hogan({}, null, '.html'))
        .pipe(gulp.dest('public'))
        .pipe(notify({message: 'Hogan compiled', onLast: true}));
});

gulp.task('default',['sass','hogan','js'],function(){

    gulp.watch("assets/stylesheets/extras/*.scss",['sass']);
    gulp.watch("assets/javascripts/extras/*.js",['js']);
    gulp.watch("assets/templates/**/*.html",['hogan']);
});