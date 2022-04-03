const userName = "Junaeid";
console.log(userName);

const http = require("http");

function myFunc(request, response) {
    if (request.url === "/time") {
        response.statusCode = 200;
        response.end("<h1>" + new Date() + "</h1>");
    } else if (request.url === "/") {
        response.statusCode = 200;
        response.end("<h1> Junaeid </h1>");
    } else {
        response.statusCode = 404;
    }
}

const server = http.createServer(myFunc);
server.listen(3000);
