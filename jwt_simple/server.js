const express = require("express")
const app = express()
const port = 3030
app.use(express.json())
app.use(express.urlencoded())

app.get("/",(req,res)=>{
    res.json({msg:"hello"})
})

const login = require("./Login/login")
app.use("/login",login)

const module1 = require("./Module1/module1")
app.use("/module1",module1)

app.listen(port,()=>{
    console.log(`server ${port}`);
})