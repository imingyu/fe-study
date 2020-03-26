const http = require('http');

http.createServer((req, res) => {
    console.log(req);
    res.end('hi nodejs');
}).listen(7809);