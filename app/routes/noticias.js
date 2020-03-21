module.exports = function(app){

    app.get('/noticias', function(req,res){

        var connection = app.config.dbConnection();

        connection.query("SELECT * FROM POSTS", function(error, result){
            //res.render('noticias/noticias', { posts : result });
            //res.send (result);
            res.send(error) 
        });

    });
}