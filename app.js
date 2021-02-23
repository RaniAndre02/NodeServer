var http = require("http");
var fs = require ("fs");

var express = require("express");
var apiServer = express();

var port = 3000;

apiServer.listen(port, () => {
    console.log("server running on port ", port);
});

apiServer.get("/login", (req, res) =>{
    fs.readFile('login.html', function (err, data){
        res.writeHead(200,{"Content-Type":"text/html"});
        res.write(data);
        res.end();
    });
   
});


apiServer.get("/", function(req, res){
    res.send("<h1>Sei nella home page del server della mensa</h1> <p>questo è un messaggio, ti trovi nella pagina iniziale</p> <h2>"
    +"titolo aggiunto dopo </h2>");
    
})
