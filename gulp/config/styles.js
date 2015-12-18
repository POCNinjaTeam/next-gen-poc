'use strict';

import path from 'path';
import merge from 'merge';
import {paths, config} from './index';


const base = {
    styles: {
        app: {
            cwd: paths.app,
            src: [
                '**/*.scss',
            ],
            dest: path.join(paths.tmp, paths.app),
        },
    }
};

config.styles = base.styles;



export default base;
export const production = {};
