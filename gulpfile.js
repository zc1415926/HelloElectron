/**
 * Created by zc1415926 on 2016/3/15.
 */
'use strict';

var gulp = require('gulp');

var config = {
    path: {
        cssDir: 'app/css',
        jsDir:  'app/js',
        fontDir: 'app/fonts'
    }
}

gulp.task('copyFrontLib', function(){
    gulp.src('node_modules/bootstrap/dist/css/bootstrap.min.css')
        .pipe(gulp.dest(config.path.cssDir));
    gulp.src('node_modules/bootstrap/dist/js/bootstrap.min.js')
        .pipe(gulp.dest(config.path.jsDir));
    gulp.src('node_modules/jquery/dist/jquery.min.js')
        .pipe(gulp.dest(config.path.jsDir));
    gulp.src('node_modules/bootstrap/fonts/*')
        .pipe(gulp.dest(config.path.fontDir));
});

gulp.task('default', ['copyFrontLib']);