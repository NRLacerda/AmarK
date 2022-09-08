var http = require('http')

http.createServer(function(req,res){ //cria o server
    res.end("Server Running, bitch")
}).listen(8042); // diz qual porta ira rodar o server local
console.log("server rodando, let's go")