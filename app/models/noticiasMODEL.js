//Models representam entidades do banco de dados 

module.exports = function (){

    this.pegaNoticias = function(connection, callback){ /*a função de callback (que está no noticias.js)
        determina o que deverá ser feito se a consulta ao banco der ok*/ 
        connection.query ('SELECT * FROM POSTS', callback); 
    } //essa função vai poder ser recuperada lá no noticias.js 
    
    this.umaNoticia = function(connection, callback){
        connection.query ('SELECT * FROM POSTS WHERE ID_POST = 1', callback); 
    }

    this.salvaNoticia = function(posts, connection, callback){
        connection.query ('INSERT INTO POSTS SET ?', posts, callback) //sql permite inserção usando método SET
        //O módulo vai transformar o JSON em strings para inserir no banco
    }
    
    return this;  
}