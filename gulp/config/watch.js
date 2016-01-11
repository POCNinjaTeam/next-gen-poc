'use strict';


import {paths} from './index';
import config from '../utils/config';

import serverConfig from './server';
//import expressApp from '../../tmp/src/server/app';


const base = {
    app: {
        //dep: ['scripts'],
        src: [
            'src/app/**/*.js',
        ],
        execute: [
            'scripts',
            'browser-reload'
        ],
    },


    server: {
        app: config('server').express.app,
        //dep: ['server:express'],
        src: [
            'src/server/**/*.js',
        ],
        execute: [
            'scripts:server',
            'browser-reload'
        ],
        //command: 'node-debug',
    },

    styles: {
        src: [
            'src/**/*.scss',
        ],
        execute: [
            'styles',
            'browser-reload'
        ],
    }


    /*'unit-tests': {
            deps: ['scripts'],
            livereload: true,
        },*/
};

const production = {};


config('watch', base);
config('watch', production, 'production');


const conf = config('watch');
export default conf;

