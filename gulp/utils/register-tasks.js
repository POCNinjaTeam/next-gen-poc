'use strict';


import gulp from 'gulp';
import path from 'path';
import runSequence from 'run-sequence';

import {config, paths} from '../config';



function multiTargetTask(taskTargetName, taskFunction) {
    // get the current running task obj
    var task = gulp.tasks[taskTargetName]
    return (done) => {
        //var stream = gulp.src(task.config.src, {cwd: task.config.cwd});
        return taskFunction.apply(gulp, [task, done])
    };
}


export function registerAllTargets () {
    return Object.keys(gulp.tasks)
        .forEach((key) => {
            var task = gulp.tasks[key],
                taskConfig = config[task.name] || {config:{}};
            
            let targets = Object.keys(taskConfig)
                .map((target) => {
                    let taskTargetName = task.name +':'+ target;
                    
                    gulp.task(taskTargetName, task.fn);
                    // add some custom values to gulp.tasks
                    gulp.tasks[taskTargetName].config = taskConfig[target] || {};
                    /*gulp.tasks[taskTargetName].target = {
                        parentTask: task,
                        name: target,
                    };*/
                    gulp.tasks[taskTargetName].fn =
                        multiTargetTask(taskTargetName, task.fn);
                    
                    return taskTargetName;
                });
            
            gulp.task(task.name, () => runSequence(targets));
        
        });
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

