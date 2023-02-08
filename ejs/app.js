const express = require("express")
const ejs = require("ejs")
const app = express()

app.set("view engine", "ejs")

app.get("/", (req, res) => {
    let model = { x: 1000, y: 20 }
    res.render("index", model)
})

app.get("/login",(req,res)=>{
    let model={uname:"kaushik",pwd:"kaushik@12"}
    res.render("login",model)
})

app.use("/student",(req,res)=>{
    let model={
        studentId:"s011",
        studentName:"kaushik",
        studentMarks:40,
        subject:[
            {name:"math",marks:"54"},
            {name:"science",marks:"53"},
            {name:"english",marks:"55"},
        ]
    }
    res.render("student",model)
})

app.listen(3030, () => {
    console.log(`server ${3030}`);
})