var mysql = require('mysql'); //Módulos do mysql 

module.exports = function(){
    console.log('Conexão com banco de dados ok');
    
    return mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '1234',
        database: 'atelier'
    }); 
}


