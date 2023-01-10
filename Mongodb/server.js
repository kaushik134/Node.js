const express = require("express")
const app = express()
const port=3030

app.get("/",(req,res)=>{
    res.json({msg:"inside server"})
})

const getdata = require("./GetData/getdata")
app.use("/getdata",getdata)

app.listen(port,()=>{
    console.log(`server ${port}`);
})