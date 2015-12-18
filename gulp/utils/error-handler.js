'use strict';


import gutil from 'gulp-util';



export default function errorHandler (title) {
    //console.log('errorHandler', title);
    return function (err) {
        gutil.log(gutil.colors.red('[' + title + ']'), err.toString());
        this.emit('end');
    };
};
