//'use strict';
//
//var config = require('../config'),
//    gulpif = require('gulp-if');
//
//
//export function checkConfig(task, key) {
//    return true;
//}
//
//
//// TODO: support passing if and else func arguments
////       something like shouldRun(task, key, [ifFunc, arg, ...])
//export function shouldRun(task, key, ifFunc, elseFunc) {
//    return gulpif(checkConfig(task, key), ifFunc, elseFunc);
//}