const express = require("express")
const jwt = require("jsonwebtoken")
const tokenObjct = require("../Token/token")
login = express.Router()

login.get("/",(req,res)=>{
    const name = req.body.name
    const pwd = req.body.pwd
    if(name=="admin"&&pwd=="admin123"){
        const token = jwt.sign({name:name,pwd:pwd},"skill",{expiresIn:"1m"})
        tokenObjct.token=token
        res.json({name:name,pwd:pwd,token:token})
    }else{
        res.json({msg:"failed"})
    }
})

module.exports=login