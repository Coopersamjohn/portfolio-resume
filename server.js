var http = require('http');
var fs = require('fs');
 
var handleRequest = (request, response) => {
    response.writeHead(200, {
        'Content-Type': 'text/plain'
    });
    response.write('Hi There!');
    response.end();
};
 
http.createServer(handleRequest).listen(8080);