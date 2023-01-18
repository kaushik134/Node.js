const express = require("express")
const cors = require("cors")
const app = express()
const port = 3300

app.use(express.json())
app.use(express.urlencoded())

app.use("/",(req,res)=>{
    console.log("inside server");
})

app.listen(port,()=>{
    console.log(`server ${port}`);
})