'use strict';


import express from 'express';



var app = express();


app.get('/', function (req, res) {
    console.log('im here');
    res.send('<html><body>Hello a World! <input></body></html>');
});


var server = app.listen(8080, function () {
    var host = server.address().address;
    var port = server.address().port;

    console.log('Example app listening at http://%s:%s', host, port);
});



export default app;

