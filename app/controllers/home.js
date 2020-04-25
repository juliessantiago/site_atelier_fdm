module.exports.index = function(aplicacao, requisicao, reposta){
    var dbConnection = require ('../../config/dbConnection.js'); //recuperando a funcao de conexao
    var connection = dbConnection(); //chamando a funcao de conexao  

    var noticiasModel = new aplicacao.app.models.NoticiasDAO; //criando nova instância da classe  

    noticiasModel.getLast5(connection, function(erro, resultado){
        reposta.render('home/index',{posts : resultado}); 
    }); 
    
}