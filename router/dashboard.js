const express = require("express")
dashboard = express.Router()
dashboard.post("/",(req,res)=>{
    res.json({msg:"dashboard"})
})
module.exports=dashboard