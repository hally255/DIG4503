var http = require('http');
var url = require('url');

http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    var q = url.parse(req.url, true).query; // looks through the url for strings
    var txt = q.year + " " + q.month; //finds the strings and put them together
    res.end(txt);
}).listen(8080);