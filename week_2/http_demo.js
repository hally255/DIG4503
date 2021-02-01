var http = require('http');
//requires the http module of nade.js
// allows for js to create a server

//creates a server object
http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Tpye': 'text/html' }); //writes the respose as html
    res.write('hello World'); //writes a response to the client
    res.write(req.url); //holds part of the url that comes after the domain name
    res.end();//ends the response
}).listen(8080); //the server listens on port 8080