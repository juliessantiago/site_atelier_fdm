module.exports = function(app){
    app.get ('/', function(request, response){ //diretório raiz 
        response.render ('home/index.ejs')
    })
}

