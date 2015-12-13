'use strict';

import path from 'path';
import merge from 'merge';
import {paths, config} from './index';


export default base;

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

        /*server: {
            //cwd: paths.app,
            src: [
                '** /*.js',
                '!bower_components/moment/**',
                '!node_modules/**',
            ]
        }*/
    }
};

config.scripts = base.scripts;
    


export const production = {};
