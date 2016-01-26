'use strict';


import {spawn} from 'child_process';

import gulp from 'gulp';
import connect from 'gulp-connect';

import browserSync from 'browser-sync';

/*gulp.task('serve', ['watch'], function () {
    browserSyncInit([path.join(conf.paths.tmp, '/serve'), conf.paths.src]);
});*/



gulp.task('server', (task, done) => {
    /*connect.server({
        root: task.config.root || '',
        port: task.config.port || 3000,
        host: task.config.host,
        // FIXME: there appears to be a bug with gulp-connect where
        // passing `options.https: false` turns it on
        https: task.config.https,
        livereload: task.config.livereload || true,
        fallback: task.config.fallback,
        middleware: task.config.middleware,
    });
    
    // make sure to run done to end the task
    done();*/
    
    var browser = browserSync.create(task.name);
    
    browserSync.init({
        https: true,
        proxy: 'https://localhost:8443'
        
        //server: "./tmp/src/server",
        //files: ["*.html", "*.js"]
    });
});

gulp.task('browser-reload', () => browserSync.reload());


gulp.task('serve', ['scripts', 'server:express', 'watch', 'inject']);



/*gulp.task('node-server', (task, done) => {
    var child = task.context.child,
        target = task.target;
    
    switch (target.name) {
        case 'restart':
        case 'start':
            return startChild();
        case 'stop':
            return stopChild();
        default:
            if (task.config.execute) {
                return task.config.execute.apply(this, task.config.executeArgs || []);
            }
            break;
    }

    function stopChild() {
        if (!child) {
            return false;
        }
        
        console.log('Killing spawned process');
        return child.kill();
    }
    
    function startChild() {
        stopChild();
        console.log('Starting new spawned process');
        
        if (task.config.app) {
            child = spawn(task.config.node || 'node',
                [].concat(task.config.app, task.config || []),
                task.config.opts || {stdio: 'inherit'});
        } else {
            throw new Error('config.app must have a path to the node app');
        }
    }
    
    child.on('close', function (code) {
        console.error(code);
        if (code === 8) {
            console.log('Error detected, waiting for changes...');
        }
    });

});*/





/*
var path = require('path');
var gulp = require('gulp');
var conf = require('../config');

var browserSync = require('browser-sync');
var browserSyncSpa = require('browser-sync-spa');

var util = require('util');

var proxyMiddleware = require('http-proxy-middleware');

function browserSyncInit(baseDir, browser) {
  browser = browser === undefined ? 'default' : browser;

  var routes = null;
  if(baseDir === conf.paths.src || (util.isArray(baseDir) && baseDir.indexOf(conf.paths.src) !== -1)) {
    routes = {
      '/bower_components': 'bower_components'
    };
  }

  var server = {
    baseDir: baseDir,
    routes: routes
  };

  /*
   * You can add a proxy to your backend by uncommenting the line below.
   * You just have to configure a context which will we redirected and the target url.
   * Example: $http.get('/users') requests will be automatically proxified.
   *
   * For more details and option, https://github.com/chimurai/http-proxy-middleware/blob/v0.9.0/README.md
   * /
  // server.middleware = proxyMiddleware('/users', {target: 'http://jsonplaceholder.typicode.com', changeOrigin: true});

  browserSync.instance = browserSync.init({
    startPath: '/',
    server: server,
    browser: browser
  });
}


browserSync.use(browserSyncSpa({
  selector: '[ng-app]'// Only needed for angular apps
}));


gulp.task('serve', ['watch'], function () {
  browserSyncInit([path.join(conf.paths.tmp, '/serve'), conf.paths.src]);
});


gulp.task('serve:dist', ['build'], function () {
  browserSyncInit(conf.paths.dist);
});


gulp.task('serve:e2e', ['inject'], function () {
  browserSyncInit([conf.paths.tmp + '/serve', conf.paths.src], []);
});


gulp.task('serve:e2e-dist', ['build'], function () {
  browserSyncInit(conf.paths.dist, []);
});
*/