const express = require("express")
const jwtToken = require("jwt-simple")
const tokenObjct = require("../Token/token")
const app = express()
login = express.Router()

login.get("/",(req,res)=>{
    const name = req.body.name
    const pwd = req.body.pwd
    if(name=="admin"&&pwd=="admin123"){
        const token = jwtToken.encode({name:name,pwd:pwd},"skill")
        tokenObjct.token=token
        res.json({name:name,pwd:pwd,token:token})
    }else{
        res.json({msg:failed})
    }
})
module.exports = login