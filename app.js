require("dotenv")

var express = require('express');
var app = express();

app.post('/', function(req,res) {
   
    res.send('selecione o cliente');

});

app.listen(process.env.PORT||3000, function () {
    console.log('Executando na porta 3000');

});
