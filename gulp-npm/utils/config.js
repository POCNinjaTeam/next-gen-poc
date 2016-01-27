'use strict';


import merge from 'merge';
import Debug from 'debug';



var configObj = {};

export default function config(key, configOpts = {}, opts = {}, env) {
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
    if (configObj[key] && Object.keys(configOpts).length === 0) {
        return configObj[key];
    }

    
    debug('matchesEnv', matchesEnv(), key, nodeEnv, env);
    // env dependent code
    if (!matchesEnv()) {
        return null;
    }
    
    
    /*
    // config('key', opts)
    if (configObj[key] && !opts.replace) {
        debug("config('key', opts)", !!configObj[key], opts.replace);
        configObj[key] = merge.recursive(getNormalizedConfig(), configOpts);
        debug('config + defaults obj', configObj[key], configOpts.defaults);
        return configObj[key];
    }

    // always add/replace if non existent or replace = true
    if (!configObj[key] || opts.replace) {
        debug("add/replace if non existent", !!configObj[key], opts);
        configObj[key] = merge.recursive(true, getNormalizedConfig(), configOpts);
    }
    */

    
    return getNormalizedConfigObj();
    
    
    
    function getNormalizedConfigObj() {
        // merge defaults over each target
        Object.keys(configOpts)
            .filter(target => target !== 'defaults')
            .forEach(key => configOpts[key] = merge.recursive(true,
                configOpts.defaults, configOpts[key]));
        
        // config('key', opts)
        if (configObj[key] && !opts.replace) {
            debug("config('key', opts)", !!configObj[key], opts.replace);
            merge.recursive(configObj[key], configOpts);
        }
        
        // always add/replace if non existent or replace = true
        if (!configObj[key] || opts.replace) {
            debug("add/replace if non existent", !!configObj[key], opts);
            configObj[key] = configOpts;
        }

        debug('config + defaults obj', configObj[key], configOpts.defaults);
        return configObj[key];
    }
}

