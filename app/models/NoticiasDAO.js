//Models representam entidades do banco de dados 
//Primeiro cria-se a classe que vai ser exportada (Noticias)
//Depois define-se as propriedades da classe 
function NoticiasDAO(){
    
}
//DAO = DATA OBJETCT ACCESS = objeto de acesso a dados 

NoticiasDAO.prototype.buscaNoticias = function(connection, callback){
    connection.query('SELECT * FROM POSTS', callback);
}

NoticiasDAO.prototype.salvarNoticia = function(posts, connection, callback){
     
    connection.query('INSERT INTO POSTS SET ?', posts, callback)
}

NoticiasDAO.prototype.mostraUma = function(posts, connection, callback){
    connection.query('SELECT * FROM POSTS WHERE ID_POST = 2', callback)
}

NoticiasDAO.prototype.getLast5 = function(connection, callback){
    connection.query('SELECT * FROM POSTS ORDER BY DATA_CRIACAO DESC LIMIT 5',callback)
}

module.exports = function(){
    return NoticiasDAO; 
}
//é possível passar a connection como parâmetro lá da Classe, mas preferi receber nas funções 

