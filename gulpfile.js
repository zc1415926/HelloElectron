/**
 * Created by zc1415926 on 2016/3/15.
 */
'use strict';

var gulp = require('gulp');
var browserify = require('browserify');
var reactify = require('reactify');
var source = require('vinyl-source-stream');

var config = {
    path: {
        cssSrcDir: 'src/css',
        cssDistDir: 'app/css',
        jsSrcDir:  'src/js',
        jsDistDir:  'app/js',
        jsFiles: 'app/js/*/*.js',
        fontDir: 'app/fonts',
        indexJs: 'src/js/index.js'
    }
}

gulp.task('copyFrontLib', function(){
    gulp.src('node_modules/bootstrap/dist/css/bootstrap.min.css')
        .pipe(gulp.dest(config.path.cssDistDir));
    gulp.src('node_modules/bootstrap/dist/js/bootstrap.min.js')
        .pipe(gulp.dest(config.path.jsDistDir));
    gulp.src('node_modules/bootstrap/fonts/*')
        .pipe(gulp.dest(config.path.fontDir));
});

gulp.task('html', function(){
    gulp.src('src/index.html')
        .pipe(gulp.dest('app/'));
});

gulp.task('js', function(){
    browserify(config.path.indexJs)
        .transform(reactify)
        .bundle()
        .on('error', console.error.bind(console))
        .pipe(source('bundle.js'))
        .pipe(gulp.dest(config.path.jsDistDir + '/'));
});

gulp.task('css', function(){
    gulp.src(config.path.cssSrcDir + '/**/*.css')
        .pipe(gulp.dest(config.path.cssDistDir));
});

gulp.task('watch', function(){
    gulp.watch(config.path.jsFiles, ['js']);
});

gulp.task('default', ['copyFrontLib', 'html', 'js', 'css', 'watch']);