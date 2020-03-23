var express = require('express');
var consign = require('consign');

var app = express();

app.set('view engine', 'ejs');
app.set('views', './app/views');

consign()
    .include('app/routes') //Carrega automaticamente todas as rotas 
    .then('config/dbConnection.js')
    .then('app/models') //Carrega automaticamente todos os models 
    .into(app);

module.exports = app;