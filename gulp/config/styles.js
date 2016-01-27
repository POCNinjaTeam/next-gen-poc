'use strict';

import path from 'path';
import merge from 'merge';

import registerConfig from '../utils/config';

import {paths} from './index';


const base = registerConfig('styles', {
    app: {
        cwd: paths.app,
        src: [
            '**/*.scss',
        ],
        dest: path.join(paths.tmp, paths.app),
    },
});


const production = registerConfig('styles', {}, 'production');




export default registerConfig('styles');
