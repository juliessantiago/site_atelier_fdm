
let express = require ('express'); //Recuperando a biblioteca do express 
let consign  = require ('consign') //Recuperando o módulo do consign 

/*O EJS é uma engine de visualização, 
com ele conseguimos transportar dados do back-end para o front-end
conseguimos utilizar códigos em javascript no html de nossas páginas*/ 

var app = express(); //Chamando a função acima
//Uma das vantagens em usar o Express é poder tratar as requisições de URLs de forma mais simples 

app.set ('view engine', 'ejs'); /*Indicando que as views (códigos HTML)vão ser geradas pelo EJS*/ 

//Por default as views vão ser procuradas no diretório princial (curso_node), mas agora que elas
//estão dentro da pasta App, é necessário indicar onde o EJS vai buscá-las 

app.set ('views', './app/views'); //Por que colocar o caminho a partir da raíz? pq o objeto app 
//está sendo incluído em app.js (como um módulo)

consign().include('app/routes').into(app) //include - informa qual é o diretório que quero incluir na aplicação; into - onde colocar esses módulos 

module.exports = app; 