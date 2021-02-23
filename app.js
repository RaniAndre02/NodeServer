var http = require("http");

var express = require("express");
var apiServer = express();

var port = 3000;

apiServer.listen(port, () => {
    console.log("server running on port ", port);
});

apiServer.get("/mensa", (req, res) =>{
    console.log("ho ricevuto una get su nome");
   res.send("<h1>Sei in una risorsa che si chiama mensa</h1>");
});

apiServer.get("/", function(req, res){
    res.send("<h1>Sei nella home page del server della mensa</h1>");
})
