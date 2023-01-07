const express = require("express")
const middleware = require("../MiddleWare/middleware")
const tokenObjct = require("../Token/token")
module1 = express.Router()

module1.get("/",[middleware],(req,res)=>{
    res.json({msg:"successfully",token:tokenObjct.token})
})

module.exports=module1