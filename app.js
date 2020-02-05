let app = require ('./config/server')//módulo que contém as configurações do servidor 

app.listen(4000, function(){
    console.log ('Server ON'); 
}); 

let home = require('./app/routes/home')(app); 
 
let formulario = require ('./app/routes/formulario'); 
formulario(app); 


let produtos = require ('./app/routes/produtos'); 
produtos(app); 
