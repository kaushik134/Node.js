const express = require("express");
const app = express();
login = express.Router();
login.post("/", (req, res) => {
    res.json({ msg: "inside login" });
    console.log(req.body);
    console.log(req.body.name);
    console.log(req.body.pass);
    if (req.body.name === req.body.pass) {
        console.log("dashboard");
        // const dashboard = require("./dashboard");   
        // res.sendFile(__dirname + "/dashboard.js")
        res.redirect(301,'/dashboard.js')
        // login.use("/dashboard", dashboard);
    } else {
        console.log("please enter your current uname & password");
    }
});
module.exports = login;