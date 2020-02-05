/*Arquivo de definição de rota*/ 

let funcao_conexao = require ('../../config/connection'); //recuperando a função criada no connection

let conexao = funcao_conexao(); /*chamando a funçao - ESSA VARIAVEL QUE RECEBE O RETORNO DEVE
SER A MESMA USADA NA QUERY*/ 

module.exports = function (app){ 

app.get ('/produtos', function(request, response){    
        
        conexao.query('select * from posts', function(error, result){ //dois parametros: erro e resultado  
            //após a consulta em si, passamos uma função de callback 
            response.send(result); //mostra os resuultados direto no html  
           //response.render('produtos/produtos.ejs', {posts : result})//deixa a visualização a cargo do EJS
            //cria um JSON com um rótulo ("posts") 

        }); 
    })
}

