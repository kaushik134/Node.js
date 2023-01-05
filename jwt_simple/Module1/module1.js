const express = require("express")
const { token } = require("../Token/token")
const tokenObjct = require("../Token/token")
const app = express()
module1 = express.Router()

module1.get("/",(req,res)=>{
    const headToken = req.headers.token
    if(headToken==tokenObjct.token){
        res.json({msg:"successfully",token:tokenObjct.token})
    }else{
        res.json({msg:"failed"})
    }
})
module.exports = module1