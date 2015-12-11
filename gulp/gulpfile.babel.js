'use strict';


import path from 'path';
import gulp from 'gulp';
import wrench from 'wrench';

import {registerAllTargets} from './utils/register-tasks';



/**
 *  This will load all js or coffee files in the gulp directory
 *  in order to load all gulp tasks
 */
export default wrench.readdirSyncRecursive(path.join(__dirname, 'tasks'))
    .filter(function (file) {
        return (/\.(js|coffee)$/i).test(file);
    })
    .map((file) => {
        require('./tasks/' + file);
    });

