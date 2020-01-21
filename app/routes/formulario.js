module.exports = function (app){ //app é o objeto criado lá na config do servidor
    app.get ('/formulario', function(request, response){
        response.render ('admin/formulario.ejs') //Com o EJS, o Express passa a ter o método RENDER
    })
}//Colocando dentro de uma função porque é preciso encapsular os comandos acima 
//No módulo só é possível enviar uma coisa de cada vez 

