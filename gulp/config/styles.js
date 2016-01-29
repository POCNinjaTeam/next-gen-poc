'use strict';

import path from 'path';
import merge from 'merge';

import registerConfig from '../utils/config';

import {paths} from './index';


const base = registerConfig('styles', {
    defaults: {
        cwd: paths.app,
        base: paths.base,
        dest: paths.tmp,
        read: true,
    },
    
    
    app: {
        cwd: paths.app,
        src: [
            '**/*.scss',
        ],
//        dest: paths.app,
    },
});


const production = registerConfig('styles', {}, 'production');




export default registerConfig('styles');
