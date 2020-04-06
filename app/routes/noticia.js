var dbConnection = require ('../../config/dbConnection.js'); //recuperando a funcao de conexao

module.exports = function(aplicacao){ /*mudei o nome aqui, mas é a mesma variável app definida 
    no server.js */ 

    aplicacao.get('/noticia', function(req,res){

        var connection = dbConnection(); //chamando a funcao de conexao 

        var model_noticias = aplicacao.app.models.NoticiaDAO; //Acessando o módulo noticiasMODEL; 

        model_noticias.umaNoticia(connection, function(error, result){//recuperando a funcao dentro do módulo noticiasMODEL
            //é preciso passar a conexão e a função de callback como parâmetros 
            res.render('noticias/noticia', { post : result }); //noticias é a pasta, noticia é o arquivo EJS

            //res.send (result);
            //res.send(error) 
        }); 

    }); 
         
}; 
