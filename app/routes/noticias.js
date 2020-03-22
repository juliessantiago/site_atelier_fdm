var dbConnection = require ('../../config/dbConnection.js'); //recuperando a funcao de conexao


module.exports = function(app){

    app.get('/noticias', function(req,res){

        var connection = dbConnection(); //chamando a funcao de conexao 

        connection.query("SELECT * FROM POSTS", function(error, result){
            res.render('noticias/noticias', { posts : result });
            //res.send (result);
            //res.send(error) 
        });

    });
}