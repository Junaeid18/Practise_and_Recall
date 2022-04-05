const path = require("path");
const fs = require("fs");
const exp = require("express");
const { json, links } = require("express/lib/response");
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

    const filePath = path.join(__dirname, "data", "userData.json");
    const readData = fs.readFileSync(filePath);

    const existingUser = JSON.parse(readData);
    existingUser.push(userName);

    const newInsert = JSON.stringify(existingUser);
    fs.writeFileSync(filePath, newInsert);

    res.send("<h1>" + userName + "</h1>");
    console.log(userName);
});

app.get("/allUser", function (req, res) {
    const dataPath = path.join(__dirname, "data", "userData.json");
    const allUser = fs.readFileSync(dataPath);

    const users = JSON.parse(allUser);

    let adduser = "<ul style='text-align:center; list-style:none;'>";
    for (const i of users) {
        adduser += "<li>" + i + "</li>";
    }
    adduser += "</ul>";
    res.send("<h1>" + adduser + "</h1>");
});

app.listen(3000);
