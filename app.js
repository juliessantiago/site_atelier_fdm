let app = require ('./config/server')//módulo que contém as configurações do servidor 

app.listen(3000, function(){
    console.log ('Servidor rodando com Express')
}); 
/*Bug: Nodemon não está assinado digitalmente - não pude executá-lo*/ 

/*let home = require('./app/routes/home'); 
home(app); */ 
//MELHOR FORMA, segundo o CommonJS: 

let home = require('./app/routes/home')(app); 
 
let formulario = require ('./app/routes/formulario'); //Este módulo é uma função, é preciso chamá-la abaixo 
formulario(app); 


let produtos = require ('./app/routes/produtos'); 
produtos(app); 
