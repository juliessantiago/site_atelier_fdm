let mysql = require ('mysql'); //módulo já instalado

let exportaConexao = function (){ //função que conecta no banco de dados 
    
    return mysql.createConnection ({     
        host : 'localhost', //parâmetros são passados como estrutura JSON
        user: 'root', 
        password: '1234', 
        database: 'atelier'
    })
}


module.exports = function (){ 
    console.log ('Nova conexão foi realizada')
    return exportaConexao; //Eu não poderia dar um module.exports na própria variável exportaConexao??
}

       