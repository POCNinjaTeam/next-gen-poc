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
    }
};

config.watch = base.watch;



export const production = {};
