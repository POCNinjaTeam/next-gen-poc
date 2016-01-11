'use strict';


import config from 'gulp-npm/utils/config';



const base = {
    'extend-config': {
        cwd: paths.server,
        src: [
            '**/*.js',
        ],
    }
};


// register all config envs
config('scripts', base);


const conf = config('scripts');
//console.log('conf', conf);

export default conf;
