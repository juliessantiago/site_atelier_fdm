var express = require('express');
var consign = require('consign');
var bodyParser = require ('body-parser'); 
var expressValidator = require('express-validator'); 

var app = express();

app.set('view engine', 'ejs');
app.set('views', './app/views');

app.use(bodyParser.urlencoded({extended: true})) //permite que sejam usadas URLs codificadas
app.use(expressValidator()); //O módulo exporta uma função e aqui já estamos executando-a 
app.use(express.static('./app/public')); //acessa todos os arquivos estáticos que estão na pasta public como se estivessem na pasta raiz  

consign()
    .include('app/routes') //Carrega automaticamente todas as rotas 
    .then('config/dbConnection.js')
    .then('app/models') //Carrega automaticamente todos os models 
    .then('app/controllers')//carrega automaticamente os controllers 
    .into(app);

module.exports = app;