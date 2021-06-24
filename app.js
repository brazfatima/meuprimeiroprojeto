console.log('olá mundo');
var express = require('express');
var app = express();

app.get('/', function(req,res) {
    res.send('ola mundo');

});

app.listen(3000, function () {
    console.log('Executando na porta 3000');

});
