module.exports = function(app){
    app.get('/formulario_inclusao_noticia', function(req,res){ /*quando formulario_inclusao_noticia
        é digitado na URL, a página a ser carregada é: */ 
        res.render('admin/form_add_noticia');
    });

    app.post('/noticias/salvar', function(req,res){
        //res.render('admin/form_add_noticia');
        var noticias = req.body; //body-parser para resgatar os dados do formulário
        res.send(noticias) 
    });
}