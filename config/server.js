
var express = require ('express'); //Recuperando a biblioteca do express 

/*O EJS é uma engine de visualização, 
com ele conseguimos transportar dados do back-end para o front-end
conseguimos utilizar códigos em javascript no html de nossas páginas*/ 

var app = express(); //Chamando a função acima
//Uma das vantagens em usar o Express é poder tratar as requisições de URLs de forma mais simples 

app.set ('view engine', 'ejs'); /*Indicando que as views (códigos HTML)vão ser geradas pelo EJS*/ 

module.exports = app; 