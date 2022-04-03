const userName = "Junaeid";
console.log(userName);

const http = require("http");

function myFunc(request, response) {
    response.statusCode = 200;
    response.end("<h1> Junaeid </h1>");
}

const server = http.createServer(myFunc);
server.listen(3000);
