'use strict';


import path from 'path';

import express from 'express';
import swig from 'swig';
import Debug from 'debug';
import logger from 'morgan';


var app = express(),
    debug = Debug('server');


// define a template language
app.engine('html', swig.renderFile);

app.set('view engine', 'html');
app.set('views', path.join(__dirname, '../app'));

// To disable Swig's cache, do the following:
swig.setDefaults({ cache: false });


// log requests
app.use(logger('dev'));
// use the static handler
app.use(express.static(path.join(__dirname, '../app')));


app.get('/', function (req, res) {
    res.render('index.html');
});

/*app.get('/', function (req, res) {
    res.send('<html><body>Hello a World! <input></body></html>');
});*/


var server = app.listen(8080, function () {
    var host = server.address().address;
    var port = server.address().port;

    console.log('Example app listening at http://%s:%s', host, port);
});



export default app;

