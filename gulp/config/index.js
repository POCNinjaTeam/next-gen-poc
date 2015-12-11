'use strict';


//import gutil from 'gulp-util';
import syncLoadModule from '../utils/sync-load-module';



export const paths = {
    /**
     *  The main paths of your project handle these with care
     */
    app: 'src/app',
    server: 'src/server',
    dist: 'dist',
    tmp: 'tmp',
    e2e: 'e2e'
};


export var config = {
    //create placeholder object,
};

// load all modules after all
syncLoadModule(__filename);


//console.log('config', config);



/**
 *  Wiredep is the lib which inject bower dependencies in your project
 *  Mainly used to inject script tags in the index.html but also used
 *  to inject css preprocessor deps and js files in karma
 
exports.wiredep = {
    exclude: [/jquery/],
    directory: 'bower_components'
};
*/

/**
 *  Common implementation for an error handler of a Gulp plugin

exports.errorHandler = function (title) {
    'use strict';

    return function (err) {
        gutil.log(gutil.colors.red('[' + title + ']'), err.toString());
        this.emit('end');
    };
};
*/
