'use strict';

//import {path} from 'path';
import {config as globalConfig, paths} from '../config';
import {registerMultiTask} from '../utils/register-tasks';

import gutil from 'gulp-util';
import Q from 'q';


var //path = require('path'),
    gulp = require('gulp'),

    babel = require('gulp-babel'),
    lazypipe = require('lazypipe'),
    concat = require('gulp-concat'),
    sourcemaps = require('gulp-sourcemaps');



export var tasks = {
    transpile: lazypipe()
        .pipe(babel, {
            presets: ['es2015']
        }),
    
    concat: lazypipe()
        //.pipe()
};


//gulp.task('transpile', registerTasks);


/*gulp.task('transpile', () => {
    // shape the array to have a promise for each target
    // and resolve Q.all after every target's been resolved
    return Q.all(Object.keys(globalConfig.scripts)
        .filter((targetName) => {
            let target = globalConfig.scripts[targetName];
            return (target.src && target.src.length > 0);
        })
        .map((targetName) => {
            let target = globalConfig.scripts[targetName],
                deferred = Q.defer();
            
            setTimeout(function() {
                gutil.log('Starting target', gutil.colors.cyan(targetName));

                gulp.src(target.src, {cwd: target.cwd || null})
                    .pipe(tasks.transpile())
                    .pipe(sourcemaps.write('.'))
                    .pipe(gulp.dest(paths.tmp))
                    .on('finish', () => {
                        gutil.log('Finished target', gutil.colors.cyan(targetName));
                        deferred.resolve();
                    });
            }, 0);
            
            return deferred.promise;
        }));
});*/


/*gulp.task('concat', ['transpile'], () => {
    return gulp.src(globalConfig.scripts.src)
        .pipe(tasks.concat())
        .pipe(sourcemaps.write('.'));
});*/




gulp.task('scripts', (task, done) => {
    console.log('task.config.dest', task.config.dest);
    return gulp.src(task.config.src, {cwd: task.config.cwd})
        .pipe(tasks.transpile())
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest(task.config.dest));
});


/*import Q from 'q';

gulp.task('scripts', (task, done) => {
    var deferred = Q.defer();

    setTimeout(() => {

        gulp.src(task.config.src)
            .pipe(tasks.transpile())
            .pipe(sourcemaps.write('.'))
            .pipe(gulp.dest(paths.tmp));

        deferred.resolve();
    }, Math.floor(Math.random() * (5000 - 2000)) + 2000);

    return deferred.promise; 
});*/






/*function webpackWrapper(watch, test, callback) {
    var webpackOptions = {
        watch: watch,
        module: {
            preLoaders: [{
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'eslint-loader'
            }],
            loaders: [{
                test: /\.js$/,
                exclude: /node_modules/,
                loaders: ['ng-annotate', 'babel-loader']
            }]
        },
        output: {
            filename: 'index.module.js'
        }
    };

    if (watch) {
        webpackOptions.devtool = 'inline-source-map';
    }

    var webpackChangeHandler = function (err, stats) {
        if (err) {
            conf.errorHandler('Webpack')(err);
        }
        $.util.log(stats.toString({
            colors: $.util.colors.supportsColor,
            chunks: false,
            hash: false,
            version: false
        }));
        browserSync.reload();
        if (watch) {
            watch = false;
            callback();
        }
    };

    var sources = [path.join(conf.paths.src, '/app/index.module.js')];
    if (test) {
        sources.push(path.join(conf.paths.src, '/app/** /*.spec.js'));
    }

    return gulp.src(sources)
        .pipe(webpack(webpackOptions, null, webpackChangeHandler))
        .pipe(gulp.dest(path.join(conf.paths.tmp, '/serve/app')));
}






gulp.task('scripts', function () {
    return webpackWrapper(false, false);
});

gulp.task('scripts:watch', ['scripts'], function (callback) {
    return webpackWrapper(true, false, callback);
});

gulp.task('scripts:test', function () {
    return webpackWrapper(false, true);
});

gulp.task('scripts:test-watch', ['scripts'], function (callback) {
    return webpackWrapper(true, true, callback);
});

*/