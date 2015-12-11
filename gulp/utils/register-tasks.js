'use strict';


import gulp from 'gulp';
import path from 'path';
import runSequence from 'run-sequence';

import {config, paths} from '../config';




export function registerAllTargets () {
    return Object.keys(gulp.tasks)
        .forEach((key) => {
            var task = gulp.tasks[key],
                taskConfig = config[task.name] || {};
            
            let targets = Object.keys(taskConfig)
                .map((target) => {
                    let taskTargetName = task.name +':'+ target;
                    
                    gulp.task(taskTargetName, task.fn);
                    // add some custom values to gulp.tasks
                    gulp.tasks[taskTargetName].target = {
                        parentTask: task,
                        name: target,
                        config: taskConfig[target] || {},
                    };
                    //console.log('task', gulp.tasks[taskTargetName]);
                    
                    return taskTargetName;
                });
            
            gulp.task(task.name, () => {
                return runSequence(targets);
            });
        });
}



export function registerMultiTask(taskFunction) {
    //console.log('module.parent.filename', module.parent.filename);
    return function(gulpCb) {
        //console.log('gulp.tasks', gulp.tasks);
        
        // find the running task and get its obj
        var task = Object.keys(gulp.tasks)
            .filter((name) => gulp.tasks[name].running)
            .map((name) => gulp.tasks[name])[0];
        
        //console.log('task', task);
        return taskFunction.apply(this, [gulpCb, task.target.config]);
    }
}

    
/*
import Q from 'q';


gulp.task('scripts', () => {
    var deferred = Q.defer();
    
    setTimeout(deferred.resolve,
        Math.floor(Math.random() * (5000 - 2000)) + 2000);
    
    return deferred.promise; 
});


gulp.task('transpile', () => {
    // shape the array to have a promise for each target
    // and resolve Q.all after every target's been resolved
    return Q.all(Object.keys(config.scripts).filter((targetName) => {
        let target = config.scripts[targetName];
        return (target.src && target.src.length > 0);
    })
    .map((targetName) => {
        let target = config.scripts[targetName],
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

