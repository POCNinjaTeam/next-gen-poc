'use strict';


import registerConfig from '../utils/config';

import {paths} from './index';
import server from './server';



const base = registerConfig('watch', {
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
        app: server.express.app,
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
});


const production = registerConfig('watch', {}, 'production');



export default registerConfig('watch');

