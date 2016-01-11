'use strict';


import path from 'path';

import {paths} from './index';
import config from '../utils/config';
import scriptsConf from './scripts';
//import expressApp from '../../tmp/src/server/app';

//console.log('server scripts get', scriptsConf);



const base = {
    app: {
        //deps: ['scripts:app'],
        root: scriptsConf.server.dest,
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
};

const production = {};

    
/*'node-server': {
    start: {
        app: './tmp/src/server/app.js',
    },
    stop: {},
    restart: {},
},*/


//config['node-server'] = base['node-server'];

config('server', base);
config('server', production, 'production');


const conf = config('server');
export default conf;

