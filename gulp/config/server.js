'use strict';


import path from 'path';

import registerConfig from '../utils/config';
//import expressApp from '../../tmp/src/server/app';

import {paths} from './index';
import scripts from './scripts';



const base = registerConfig('server', {
    app: {
        //deps: ['scripts:app'],
        root: scripts.server.dest,
        livereload: true,
    },


    express: {
        //deps: ['watch:server'],
        livereload: true,
        app: path.join(paths.tmp, 'server/app.js'),
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
});


const production = registerConfig('server', {}, 'production');

    
/*'node-server': {
    start: {
        app: './tmp/src/server/app.js',
    },
    stop: {},
    restart: {},
},*/


//config['node-server'] = base['node-server'];


export default registerConfig('server');

