var dbConnection = require ('../../config/dbConnection.js'); //recuperando a funcao de conexao

module.exports = function(aplicacao){ /*mudei o nome aqui, mas é a mesma variável app definida 
    no server.js */ 

    aplicacao.get('/noticias', function(req,res){

        var connection = dbConnection(); //chamando a funcao de conexao 

        var model_noticias = aplicacao.app.models.noticiasMODEL; //Acessando o módulo noticiasMODEL; 

        model_noticias.pegaNoticias(connection, function(error, result){//recuperando a funcao dentro do módulo noticiasMODEL
            //é preciso passar a conexão e a função de callback como parâmetros 
            res.render('noticias/noticias', { posts : result });

            //res.send (result);
            //res.send(error) 
        }); 

    }); 
         
}; 
