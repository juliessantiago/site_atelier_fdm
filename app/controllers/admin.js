//CONTROLLERS do Admin 
module.exports.formulario_inclusao_noticia = function (aplicacao, requisicao, resposta){
    resposta.render('admin/form_add_noticia', {validacao: {}, noticia: {} }); 
}


module.exports.noticias_salvar = function (aplicacao, requisicao, resposta){
     //caminho definido lá no arquivo form_add_noticia.EJS
     var posts = requisicao.body ; 
     //Express consegue recuperar informações do formulario (quando usamos método POST)
     //Mas, para isso é necessário o módulo body-parser 

     requisicao.assert('titulo', 'O título é obrigatório').notEmpty(); 
     //assert, notEmpty = express validator 

     var erros = requisicao.validationErrors();
     
     if (erros){
         resposta.render('admin/form_add_noticia.ejs', {validacao : erros}) //Segundo parâmetro do render é um JSON
         
         return; //retorna vazio, processo é parado aqui 
     }
      
      /*Função para salvar o novo post: */ 
      var dbConnection = require ('../../config/dbConnection.js'); //recuperando a funcao de conexao
         var connection = dbConnection(); //chamando a funcao de conexao 
         var model_noticias = new aplicacao.app.models.NoticiasDAO; //Acessando o módulo noticiasMODEL; 
         model_noticias.salvarNoticia(posts, connection, function(error, result){//recuperando a funcao dentro do módulo noticiasMODEL
         //é preciso passar a conexão e a função de callback como parâmetros 
         //resposta.render('noticias/noticias.ejs', { posts : result });

         //no render, toda vez que o user apertar f5, os dados vão ser enviados de novo
         
         resposta.redirect('/noticias');  
         //resposta.send (result);
         //resposta.send(error)  
          
     }); 
}

