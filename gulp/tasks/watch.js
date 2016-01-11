'use strict';


import path from 'path';

import gulp from 'gulp';
import gutil from 'gulp-util';
import runSequence from 'run-sequence';
import nodemon from 'gulp-nodemon';
import browserSync from 'browser-sync';





var BROWSER_SYNC_RELOAD_DELAY = 500;

export function nodeWatch(config, done) {
    return nodemon({
        // nodemon our expressjs server
        script: path.join(config.cwd || '', config.app),
        stdout: console.log, //process.stdout,
        //stdin: null,
        // watch core server file(s) that require server restart on change
        watch: config.src,
        tasks: config.execute || [],
        execMap: {
            js: config.command || 'node --harmony',
        },
    })
    .once('start', done)
    .on('restart', function onRestart() {
        // reload connected browsers after a slight delay
        setTimeout(browserSync.reload, BROWSER_SYNC_RELOAD_DELAY);
    });
};


export function staticWatch(config) {
    var watcher = gulp.watch(config.src, config.execute);

    watcher.on('change', function(event) {
        var shortPath = path.relative('./', event.path);
        gutil.log('File ' + shortPath + ' was ' + event.type + ', running tasks...');
        
        // reload connected browsers after a slight delay
        setTimeout(browserSync.reload, BROWSER_SYNC_RELOAD_DELAY, event.path);
    });
    
    return watcher;
}


gulp.task('watch', (task, done) => {
    if (task.config.app) {
        return nodeWatch(task.config, done);
    } else {
        return staticWatch(task.config);    
    }
});




/*
var path = require('path');
var gulp = require('gulp');
var conf = require('../config');

var browserSync = require('browser-sync');

function isOnlyChange(event) {
  return event.type === 'changed';
}

gulp.task('watch', ['scripts:watch', 'inject'], function () {

  gulp.watch([path.join(conf.paths.src, '/*.html'), 'bower.json'], ['inject-reload']);

  gulp.watch([
    path.join(conf.paths.src, '/app/** /*.css'),
    path.join(conf.paths.src, '/app/** /*.scss')
  ], function(event) {
    if(isOnlyChange(event)) {
      gulp.start('styles-reload');
    } else {
      gulp.start('inject-reload');
    }
  });


  gulp.watch(path.join(conf.paths.src, '/app/** /*.html'), function(event) {
    browserSync.reload(event.path);
  });
});
*/