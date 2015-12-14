'use strict';


import express from 'express';



var app = express();


app.get('/', function (req, res) {
    console.log('im here');
    res.send('Hello World!');
});


/*var server = app.listen(3000, function () {
    var host = server.address().address;
    var port = server.address().port;

    console.log('Example app listening at http://%s:%s', host, port);
});*/


export default app;

