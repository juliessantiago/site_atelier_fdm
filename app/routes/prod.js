/*Arquivo de definição de rota*/ 

let funcao_conexao = require ('../../config/connection'); //recuperando a função



module.exports = function (app){ 

app.get ('/prod', function(request, response){    

    var conexao = app.config.connection();  //recuperando a função criada dentro da variável app - passada por parametro 
        
        conexao.query('select * from posts where id_post = 1', function(error, result){ //dois parametros: erro e resultado  
            //após a consulta em si, passamos uma função de callback 
            response.send(result); //mostra os resuultados direto no html  
           //response.render('produtos/produtos.ejs', {posts : result})//deixa a visualização a cargo do EJS
            //cria um JSON com um rótulo ("posts") 

        }); 
    })
}
