'use strict';


import merge from 'merge';
import Debug from 'debug';



var configObj = {};

export default function config(key, configOpts, opts = {}, env) {
    let debug = Debug('config:'+ key);
    
    var nodeEnv = process.env.NODE_ENV,
        matchesEnv = () => !env || (nodeEnv === env) || (!nodeEnv && !env);
    
    // normalize optional passed args
    if (opts.constructor === String) {
        env = opts;
        opts = {};
    }
    
    debug('config args', key, configOpts, opts, env);
    
    // config() -> get all config
    if (!key) {
        return configObj;
    }
    
    // config('key') -> config getter
    if (configObj[key] && !configOpts) {
        return configObj[key];
    }

    debug('matchesEnv', matchesEnv(), key, nodeEnv, env);
    
    // config('key', opts)
    if (matchesEnv() && configObj[key] && !opts.replace) {
        debug("config('key', opts)", matchesEnv(), !!configObj[key], opts.replace);
        return merge.recursive(configObj[key], configOpts);
    }

    // always add/replace if non existent or replace = true
    if (matchesEnv() && (!configObj[key] || opts.replace)) {
        debug("add/replace if non existent", matchesEnv(), !!configObj[key], opts);
        return configObj[key] = configOpts;
    }

    return null;
}

