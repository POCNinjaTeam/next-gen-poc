'use strict';

import Debug from 'debug';

import gulp from 'gulp';
import gutil from 'gulp-util';
import babel from 'gulp-babel';
import lazypipe from 'lazypipe';
import concat from 'gulp-concat';
import sourcemaps from 'gulp-sourcemaps';
import gulpif from 'gulp-if';
import eslint from 'gulp-eslint';
import plumber from 'gulp-plumber';

import {paths} from '../config';
import errorHandler from '../utils/error-handler';


var debug = Debug('tasks:scripts');




export var tasks = {
    eslint: function(task) {
        return lazypipe()
            .pipe(eslint)
            .pipe(eslint.format)    //, 'compact')
    },
    
    transpile: function(task) {
        return lazypipe()
            .pipe(sourcemaps.init)
            .pipe(babel)
            .pipe(sourcemaps.write, '.')
    },
    
    
};


gulp.task('scripts', (task, done) => {
    debug('task.config.dest', task.config.dest);
    
    return gulp.src(task.config.src, {
            cwd: task.config.cwd,
            base: task.config.base,
            read: task.config.read,
        })
        .pipe(plumber(errorHandler(task.name)))
        .pipe(gulpif(task.config.lint, tasks.eslint(task)()))
        .pipe(gulpif(task.config.transpile, tasks.transpile(task)()))
        .pipe(gulp.dest(task.config.dest));
});





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