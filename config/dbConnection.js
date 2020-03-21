var mysql = require('mysql');

var connMySQL = function(){
    console.log('Conexao com o bd foi estabelecida');
    return connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '1234',
        database: 'atelier'
    });
}

module.exports = function(){
    console.log('Módulo de conexão foi carregado');
    return connMySQL;
}