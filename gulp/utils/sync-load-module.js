'use strict';


import path from 'path';
import glob from 'glob';


//console.log('__filename', __filename);

export default function syncLoadModule(filepath) {
    //console.log('syncLoadModule');
    var dirpath = path.dirname(filepath),
        filename = path.basename(filepath);

    //console.log('dirpath', dirpath);
    //console.log('filename', filename);

    return glob.sync('*.js', {cwd: dirpath, ignore: filename})
        .map((file) => {
            //console.log('require:', file);
            return require(path.join(dirpath, file));
        });
}
