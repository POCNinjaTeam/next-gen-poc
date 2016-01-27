'use strict';

import path from 'path';
import merge from 'merge';
import fs from 'fs';

import registerConfig from '../utils/config';

import {paths} from './index';
//import server from './server';




registerConfig('scripts', {
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
        
//        test: server.express.livereload,
    }
});

registerConfig('scripts', {}, 'production');



export default registerConfig('scripts');
