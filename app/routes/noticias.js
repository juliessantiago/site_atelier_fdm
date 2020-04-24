
module.exports = function(aplicacao){ /*mudei o nome aqui, mas é a mesma variável app definida 
    no server.js */ 
    aplicacao.get('/noticias', function(requisicao, resposta){    
        aplicacao.app.controllers.noticias.noticias(aplicacao, requisicao, resposta); 
    }); 


    aplicacao.get('/noticia', function(requisicao, resposta){
        aplicacao.app.controllers.noticias.noticia(aplicacao, requisicao, resposta); 

    });      
}; 
