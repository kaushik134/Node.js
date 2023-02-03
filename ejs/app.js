const express = require("express")
const ejs = require("ejs")
const app = express()

app.set("view engine","ejs")

app.get("/",(req,res)=>{
    let model = {x:1000,y:20}
    res.render("index",model)
})

app.listen(3030,()=>{
    console.log(`server ${3030}`);
})