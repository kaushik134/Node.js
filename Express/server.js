const express = require("express")
const app = express()
const PORT = 3030
app.get("/",(req,res)=>{
    res.json({msg:"Home"})
})
app.listen(PORT,()=>{
    console.log(`server ${PORT} connected successfully`)
})