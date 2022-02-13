var http = require('http');

//create server
http.createServer(function(req, res){
  res.write('Hello World!'); //write response to client
  res.end(); //end response

    }).listen(8080); //server listens on port 8080
