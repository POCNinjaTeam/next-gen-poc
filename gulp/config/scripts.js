'use strict';

import path from 'path';
import merge from 'merge';

import {paths} from './index';
import config from '../utils/config';



const base = {
    app: {
        cwd: paths.app,
        src: [
            '**/*.js',
            '!**/*.spec.js',
            '!bower_components/**',
            '!node_modules/**',
        ],
    },

    server: {
        cwd: paths.server,
        src: [
            '**/*.js',
        ],
    }
};

const production = {};

// register all config envs
config('scripts', base);
config('scripts', production, 'production');


const conf = config('scripts');
console.log('conf', conf);

export default conf;
