'use strict';


import {paths, config} from './index';
//import expressApp from '../../tmp/src/server/app';



const base = {
    server: {
        app: {
            //deps: ['scripts:app'],
            root: config.scripts.server.dest,
            livereload: true,
        },
        

        express: {
            //deps: ['watch:server'],
            livereload: true,
            app: './tmp/src/server/app.js',
            /*middleware: function(connect, opt) {
                return [
                    // es6 'export default' causes require to bring
                    // and obj like `{default: exported_module}`
                    require('../../tmp/src/server/app').default
                ];
            }
            middleware: [
                // es6 'export default' causes require to bring
                // and obj like `{default: exported_module}`
                require('../../tmp/src/server/app').default
            ],*/
        },
        
        
        /*dev: {
            deps: ['scripts'],
            livereload: true,
        },

        e2e: {
            livereload: false,
        }*/
    },
    
    /*'node-server': {
        start: {
            app: './tmp/src/server/app.js',
        },
        stop: {},
        restart: {},
    },*/
};


config.server = base.server;
//config['node-server'] = base['node-server'];


export default base.server;
export const production = {};
