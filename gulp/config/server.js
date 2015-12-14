'use strict';

import {paths, config} from './index';
//import expressApp from '../../tmp/src/server/app';


export default base;

const base = {
    connect: {
        app: {
            deps: ['scripts:app'],
            root: config.scripts.server.dest,
            livereload: true,
        },
        

        express: {
            deps: ['scripts:server'],
            livereload: true,
            middleware: function(connect, opt) {
                return [
                    // es6 'export default' causes require to bring
                    // and obj like `{default: exported_module}`
                    require('../../tmp/src/server/app').default
                ];
            }
        },
        
        
        /*dev: {
            deps: ['scripts'],
            livereload: true,
        },

        e2e: {
            livereload: false,
        }*/
    }
};

config.connect = base.connect;



export const production = {};
