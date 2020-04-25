module.exports.noticias = function(aplicacao, requisicao, resposta){
    var dbConnection = require ('../../config/dbConnection.js'); //recuperando a funcao de conexao
    var connection = dbConnection(); //chamando a funcao de conexao 
    
        //NEW: CRIANDO UMA NOVA INSTANCIA DO MÓDULO 
        var model_noticias = new  aplicacao.app.models.NoticiasDAO; //Acessando o módulo noticiasMODEL; 

        model_noticias.buscaNoticias(connection, function(error, result){//recuperando a funcao dentro do módulo noticiasMODEL
            //é preciso passar a conexão e a função de callback como parâmetros 
            resposta.render('noticias/noticias', { posts : result });
            

            //resposta.send (result);
            //resposta.send(error) 
        }); 
}

module.exports.noticia = function(aplicacao, requisicao, resposta){
    var dbConnection = require ('../../config/dbConnection.js'); //recuperando a funcao de conexao
    var connection = dbConnection(); //chamando a funcao de conexao 

    
    var model_noticias = new aplicacao.app.models.NoticiaDAO; //Acessando o módulo noticiasMODEL; 

        model_noticias.mostraUma(connection, function(error, result){//recuperando a funcao dentro do módulo noticiasMODEL
            //é preciso passar a conexão e a função de callback como parâmetros 
            //res.render('noticias/noticia', { post : result }); //noticias é a pasta, noticia é o arquivo EJS

            res.send (result);
            //res.send(error) 
        }); 
}