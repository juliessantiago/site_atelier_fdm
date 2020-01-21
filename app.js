
let express = require ('express'); //Recuperando a biblioteca do express 

/*O EJS é uma engine de visualização, 
com ele conseguimos transportar dados do back-end para o front-end
conseguimos utilizar códigos em javascript no html de nossas páginas*/ 

let app = express(); //Chamando a função acima
//Uma das vantagens em usar o Express é poder tratar as requisições de URLs de forma mais simples 

app.set ('view engine', 'ejs'); /*Indicando que as views (códigos HTML)vão ser geradas pelo EJS*/ 

/*app.get ('/tecnologias', function(request, response){
    response.send ('<htlm><body>Tecnologias</body></html>')
}) */ 

app.get ('/', function(request, response){ //diretório raiz 
    response.send ('home/index.ejs') //Não precisa colocar extensão 
})


app.get ('/formulario', function(request, response){
    response.render ('admin/form_add_noticia.ejs') //Com o EJS, o Express passa a ter o método RENDER
})



app.listen(3000, function(){
    console.log ('Servidor rodando com Express')
}); 
/*Bug: Nodemon não está assinado digitalmente - não pude executá-lo*/ 

let msg = require ('./modulo_teste'); //Não precisa indicar qual é a extensão 
//Colocar o ./ é uma boa prática para dizer que esse módulo está no mesmo nível 
//do script atual 

console.log (msg); 

