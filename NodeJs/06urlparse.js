var http = require('http');
var url = require('url');
http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    // var q = new URL( .location.href, `http://${req.headers.host}`)
    var q = url.parse(req.url, true).query;
    console.log(q)
    console.log(req.url);
    var txt = q.year + " " + q.month; 
    res.end(txt);
}).listen(8080);
