module.exports = function (app){ 

app.get ('/produtos', function(request, response){    
        let mysql = require ('mysql'); //módulo já instalado

        let conexao = mysql.createConnection ({     
            host : 'localhost', //parâmetros são passados como estrutura JSON
            user: 'root', 
            password: '1234', 
            database: 'atelier'
        })

        conexao.query('select * from posts', function(error, result){ //dois parametros: erro e resultado  
            //após a consulta em si, passamos uma função de callback 
            //response.render('produtos/produtos.ejs', {posts : result}) 
            response.send(result); 
            
        }); 
    })
}

