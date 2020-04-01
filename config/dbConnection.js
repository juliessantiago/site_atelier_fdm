var mysql = require('mysql'); //Módulos do mysql 

module.exports = function(){
    console.log('Módulo de conexão com SQL carregado com sucesso');
    
    return mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '1234',
        database: 'atelier'
    }); 
}


