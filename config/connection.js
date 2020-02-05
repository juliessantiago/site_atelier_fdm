let mysql = require ('mysql'); //módulo já instalado

module.exports = function (){
    return mysql.createConnection ({     
        host : 'localhost', //parâmetros são passados como estrutura JSON
        user: 'root', 
        password: '1234', 
        database: 'atelier'
    })
}

       