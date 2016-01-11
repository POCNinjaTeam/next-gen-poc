'use strict';

import path from 'path';
import merge from 'merge';

import {paths} from './index';
import config from '../utils/config';


const base = {
    app: {
        cwd: paths.app,
        src: [
            '**/*.scss',
        ],
        dest: path.join(paths.tmp, paths.app),
    },
};

//config.styles = base.styles;

const production = {};


// register all config envs
config('styles', base);
config('styles', production, 'production');


const conf = config('styles');
export default conf;
