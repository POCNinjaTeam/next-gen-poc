'use strict';

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
            ]
        },

        server: {
            //cwd: paths.app,
            src: [
                '** /*.js',
                '!bower_components/moment/**',
                '!node_modules/**',
            ]
        }
    }
};

config.scripts = base.scripts;


export const production = {};
