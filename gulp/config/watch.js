'use strict';


import {paths, config} from './index';
import serverConfig from './server';
//import expressApp from '../../tmp/src/server/app';


export default base;

const base = {
    watch: {
        app: {
            //dep: ['scripts'],
            src: [
                'src/app/**/*.js',
            ],
            execute: [
                //'watch-log',
                'scripts',
                'browser-reload'
            ],
        },


        server: {
            app: serverConfig.express.app,
            //dep: ['server:express'],
            src: [
                'src/server/**/*.js',
            ],
            execute: [
                'scripts:server',
                'watch-log',
                'browser-reload'
            ],
            //command: 'node-debug',
        },


        /*'unit-tests': {
            deps: ['scripts'],
            livereload: true,
        },*/
    }
};

config.watch = base.watch;



export const production = {};
