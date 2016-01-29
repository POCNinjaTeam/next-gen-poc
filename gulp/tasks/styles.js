'use strict';


import gulp from 'gulp';
import lazypipe from 'lazypipe';
import sourcemaps from 'gulp-sourcemaps';
import sass from 'gulp-sass';
import plumber from 'gulp-plumber';
import autoprefixer from 'gulp-autoprefixer';

import errorHandler from '../utils/error-handler';





export var tasks = {
    styles: function(task) {
        //console.log('task.name', task.name);
        return lazypipe()
            //.pipe($.inject(injectFiles, injectOptions))
            //.pipe(wiredep(_.extend({}, conf.wiredep)))
            .pipe(sourcemaps.init)
            .pipe(sass, {
                outputStyle: 'expanded',
                sourceComments: true,
                sourceMap: true,
            })
            .pipe(autoprefixer, {
                browsers: ['last 2 versions', 'ie >= 9']
            })
            .pipe(sourcemaps.write, '.');
    }
};


gulp.task('styles', (task) => {
    //console.log('task.config.dest', task.config.dest);
    return gulp.src(task.config.src, {
            cwd: task.config.cwd,
            base: task.config.base,
            read: task.config.read,
        })
        .pipe(plumber(errorHandler(task.name)))
        //.pipe(plumber(sass.logError))
        .pipe(tasks.styles(task)())
        .pipe(gulp.dest(task.config.dest))
});





/*
var path = require('path');
var gulp = require('gulp');
var conf = require('../config');

var browserSync = require('browser-sync');

var $ = require('gulp-load-plugins')();

var wiredep = require('wiredep').stream;
var _ = require('lodash');

gulp.task('styles-reload', ['styles'], function() {
  return buildStyles()
    .pipe(browserSync.stream());
});

gulp.task('styles', function() {
  return buildStyles();
});

var buildStyles = function() {
  var sassOptions = {
    style: 'expanded'
  };

  var injectFiles = gulp.src([
    path.join(conf.paths.src, '/app/** /*.scss'),
    path.join('!' + conf.paths.src, '/app/index.scss')
  ], { read: false });

  var injectOptions = {
    transform: function(filePath) {
      filePath = filePath.replace(conf.paths.src + '/app/', '');
      return '@import "' + filePath + '";';
    },
    starttag: '// injector',
    endtag: '// endinjector',
    addRootSlash: false
  };


  return gulp.src([
    path.join(conf.paths.src, '/app/index.scss')
  ])
    .pipe($.inject(injectFiles, injectOptions))
    .pipe(wiredep(_.extend({}, conf.wiredep)))
    .pipe($.sourcemaps.init())
    .pipe($.sass(sassOptions)).on('error', conf.errorHandler('Sass'))
    .pipe($.autoprefixer()).on('error', conf.errorHandler('Autoprefixer'))
    .pipe($.sourcemaps.write())
    .pipe(gulp.dest(path.join(conf.paths.tmp, '/serve/app/')));
};
*/

