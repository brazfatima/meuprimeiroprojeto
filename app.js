require("dotenv")

var express = require('express');
var app = express();

app.get('/', function(req,res) {
    res.send('ola mundo');

});

app.listen(process.env.PORT||3000, function () {
    console.log('Executando na porta 3000');

});
