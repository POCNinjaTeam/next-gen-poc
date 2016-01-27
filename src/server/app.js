'use strict';


import path from 'path';
import fs from 'fs';

import express from 'express';
import swig from 'swig';
import Debug from 'debug';
import logger from 'morgan';
import spdy from 'spdy';


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

var serverOptions = {
    key: fs.readFileSync(process.cwd() + '/keys/key.pem'),
    cert: fs.readFileSync(process.cwd() + '/keys/cert.pem'),
    //ca: fs.readFileSync(__dirname + '/keys/spdy-ca.pem')
};

var server = spdy.createServer(serverOptions, app).listen(8443, function() {
    var host = server.address().address;
    var port = server.address().port;

    console.log('Example app listening at http://%s:%s', host, port);
});


export default app;

