module.exports = function (app) {
	app.get ('/produtos', function (require, response){

        let conexao = app.config.connection 
        
        let produtosModel = app.app.models.produtosModel 
        
		produtosModel.getProdutos (conexao, function (error, result){
            response.send (result) 
            //método .render não está funcionando - possível problema do EJS 

        })//getProdutos 
        
    }) //app.get 
    
}//módulo 