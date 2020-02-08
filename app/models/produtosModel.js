module.exports  = function (){

	this.getProdutos = function (conexao, callback){	
        
        conexao.query('SELECT * FROM POSTS', callback)//já passado como parâmetro 
        
    }
    
    return this 
}


