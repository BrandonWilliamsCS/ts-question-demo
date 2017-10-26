'use strict';

var gulp = require('gulp');
var spawn = require('child_process').spawn;
var nodemon = require('gulp-nodemon');


gulp.task('default', ['start-watch-build'], function () {
});

gulp.task('start-watch-build', ['nodemon'], function () {
    gulp.watch('./src/**/*.*', ['build']);
});

gulp.task('nodemon', function (cb) {
    var started = false;
    return nodemon({ script: 'node-server/index.js' }).on('start', function () {
        if (!started) {
            cb();
            started = true;
        }
    });
});

gulp.task('build', function () {
    spawn('npm run build', [], { shell: true, stdio: 'inherit' });
});
