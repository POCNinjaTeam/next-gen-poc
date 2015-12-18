'use strict';

import path from 'path';
import merge from 'merge';
import {paths, config} from './index';


const base = {
    scripts: {
        app: {
            cwd: paths.app,
            src: [
                '**/*.js',
                '!**/*.spec.js',
                '!bower_components/**',
                '!node_modules/**',
            ],
            dest: path.join(paths.tmp, paths.app),
        },

        server: {
            cwd: paths.server,
            src: [
                '**/*.js',
            ],
            dest: path.join(paths.tmp, paths.server),
        }
    }
};

config.scripts = base.scripts;
    


export default base;
export const production = {};
