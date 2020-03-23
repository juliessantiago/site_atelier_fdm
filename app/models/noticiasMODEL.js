//Models representam entidades do banco de dados 
//Cada model possuirá a consulta a uma tabela 

module.exports = function (){

    this.pegaNoticias = function(connection, callback){ /*a função de callback (que está no noticias.js)
        determina o que deverá ser feito se a consulta ao banco der ok*/ 
        connection.query ('SELECT * FROM POSTS', callback); 
    } //essa função vai poder ser recuperada lá no noticias.js 
    
    this.umaNoticia = function(connection, callback){
        connection.query ('SELECT * FROM POSTS WHERE ID_POST = 1', callback); 
    }
    
    return this;  
}