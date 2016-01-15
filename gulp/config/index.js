'use strict';


import syncLoadModule from '../utils/sync-load-module';
import config from '../utils/config';



//console.log('config', config);


export const paths = {
    /**
     *  The main paths of your project handle these with care
     */
    base: 'src',
    app: 'src/app',
    server: 'src/server',
    dist: 'dist',
    tmp: 'tmp',
    e2e: 'e2e'
};


// load all modules after all
syncLoadModule(__filename);


//var config = config
// export the config function
//console.log('myConf', myConf);
//export default config;

