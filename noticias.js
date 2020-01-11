

/*NODE NÃO É UM SERVIDOR HTTP*/ 
//Node é uma plataforma de desenvolvimento baseada no Chrome
//faz a interpretação de códigos JS do lado do servidor 


/*Criando  o servidor usando a biblioteca HTTP*/ 



var http = require ('http'); 

http.createServer(function (requsicao, resposta){
    var categoria = requsicao.url; 

    if (categoria  == '/tecnologia'){
        resposta.end ('<html><body>The last news of tecnologies</body> </html>')
    }
    else if (categoria == '/app'){
        resposta.end ('<html><body>Android and IOS</body> </html>')
    }
    
    /*Usando a função como parâmetro*/ 
    resposta.end('<html><body> TecCenter </body> </html>')
}).listen(3000); 

/*Após alterações de requisições, é necessário dar
restart no servidor*/ 