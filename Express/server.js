const express = require("express");
const app = express();
app.use(express.json())
app.use(express.urlencoded())
const PORT = 3030
app.get("/",(req,res)=>{   
    res.sendFile(__dirname+ "/index.html")
})
app.post("/login",(req,res)=>{
    const request = req.body;
    console.log("Data post ",request)
})
app.listen(PORT,()=>{
    console.log(`server ${PORT} connected successfully`)
})