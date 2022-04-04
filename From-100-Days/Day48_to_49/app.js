const exp = require("express");
const app = exp();

app.get("/currentTime", function (req, res) {
    res.send("<h1>" + new Date().toISOString() + "</h1>");
});

app.get("/", function (req, res) {
    res.send("<h1> Hello World </h1>");
});

app.listen(3000);
