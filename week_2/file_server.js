var http = require('http');
var fs = require('fs'); // requires the file server module
// can read, create, update, delete, and rename files

http.createServer(function (req, res) {
    fs.readFile('demo.html', function (err, data) {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write(data);
        return res.end();
    });
}).listen(8080);