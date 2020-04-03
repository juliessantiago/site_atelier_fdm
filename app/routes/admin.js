 module.exports = function (aplicacao){
     aplicacao.get('/formulario_inclusao_noticia', function (requisicao, resposta){
        resposta.render('admin/form_add_noticia'); 
     })

     aplicacao.post('/noticias/salvar', function (requisicao, resposta){ 
         //caminho definido lá no arquivo form_add_noticia.EJS
        var posts = requisicao.body ; 
        //Express consegue recuperar informações do formulario (quando usamos método POST)
        //Mas, para isso é necessário o módulo body-parser 
         
         /*Função para salvar o novo post: */ 
         var dbConnection = require ('../../config/dbConnection.js'); //recuperando a funcao de conexao
            var connection = dbConnection(); //chamando a funcao de conexao 
            var model_noticias = aplicacao.app.models.noticiasMODEL; //Acessando o módulo noticiasMODEL; 
            model_noticias.salvarNoticia(posts, connection, function(error, result){//recuperando a funcao dentro do módulo noticiasMODEL
            //é preciso passar a conexão e a função de callback como parâmetros 
            //resposta.render('noticias/noticias.ejs', { posts : result });

            //no render, toda vez que o user apertar f5, os dados vão ser enviados de novo
            
            resposta.redirect('/noticias'); 

            //resposta.send (result);

            //RESULT - o que exatamente o result mostra? 
            //resposta.send(error) 
        }); 
     })
 }