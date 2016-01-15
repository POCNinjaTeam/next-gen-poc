'use strict';

import path from 'path';
import merge from 'merge';
import fs from 'fs';

import {paths} from './index';
import config from '../utils/config';
//import * as bower_directory from process.cwd() +'/.bowerrc';





const base = {
    defaults: {
        lint: true,
        transpile: true,
        
        cwd: paths.app,
        base: paths.base,
        dest: paths.tmp,
        read: true,
    },
    
    
    app: {
        cwd: paths.app,
        src: [
            '**/*.js',
            '!**/*.spec.js',
            '!bower_components/**',
            '!node_modules/**',
        ],
    },
    
    bower: {
        lint: false,
        transpile: false,
        
        cwd: process.cwd(),
        base: process.cwd(),
        //read: false,
        
        src: [
            'bower_components/**/*.js'
        ],
        dest: path.join(paths.tmp, 'app'),
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
//console.log('conf', conf);

export default conf;
