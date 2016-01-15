'use strict';


import wiredep from 'wiredep';

import {paths} from '../config/index';





var path = require('path');
var gulp = require('gulp');
//var conf = require('../config');

var $ = require('gulp-load-plugins')();

//var wiredep = require('wiredep').stream;

var browserSync = require('browser-sync');



gulp.task('inject-reload', ['inject'], function() {
  browserSync.reload();
});



gulp.task('inject', ['scripts', 'styles'], function () {
    var injectStyles = gulp.src(['**/*.css', 'vendor.css'], {
        read: false,
        cwd: paths.app,
        base: paths.base
    });

  var injectScripts = gulp.src(['**/*.module.js'], {
    read: false,
    cwd: paths.app,
    base: paths.base
  });

  var injectOptions = {
    ignorePath: ['app', paths.tmp, path.join(paths.tmp, 'app')],
    addRootSlash: true
  };

  return gulp.src('**/*.html', {
      cwd: paths.app,
      base: paths.base
    })
    //.pipe($.inject(injectStyles, injectOptions))
    //.pipe($.inject(injectScripts, injectOptions))
    .pipe(wiredep.stream({
        ignorePath: '../..',
        directory: 'bower_components',
        cwd: './',
    }))
    .pipe(gulp.dest(path.join(paths.tmp)));
});
