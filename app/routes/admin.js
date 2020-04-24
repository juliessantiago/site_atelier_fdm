 module.exports = function (aplicacao){
     aplicacao.get('/formulario_inclusao_noticia', function (requisicao, resposta){
        aplicacao.app.controllers.admin.formulario_inclusao_noticia(aplicacao, requisicao, resposta)
     })

     aplicacao.post('/noticias/salvar', function (requisicao, resposta){ 
        aplicacao.app.controllers.admin.noticias_salvar(aplicacao, requisicao, resposta)
     })
 }