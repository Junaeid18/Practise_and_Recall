const exp = require("express");
const app = exp();

app.use(exp.urlencoded({ extended: false }));

app.get("/currentTime", function (req, res) {
    res.send("<h1>" + new Date().toISOString() + "</h1>");
});

app.get("/", function (req, res) {
    //res.send("<h1> Hello World </h1>");
    res.send(
        '<form action="/user" method="POST"><label>User Name</label><input type="text" name="username"></input><button type="submit">Submit</button></form>'
    );
});

app.post("/user", function (req, res) {
    const userName = req.body.username;
    res.send("<h1>" + userName + "</h1>");
    console.log(userName);
});

app.listen(3000);
