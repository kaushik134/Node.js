const express = require("express")
const mongoose = require("mongoose")
Users=express.Router()

Users.use(express.json())
Users.use(express.urlencoded())

const user = require("../Models/User")

Users.post("/insert",(req,res)=>{
    user.insertMany(req.body,(err,result)=>{
        if(err) throw err
        else{
            console.log(result);
            res.send(result)
        }
    })
})

Users.get("/find",(req,res)=>{
    user.find({},(err,result)=>{
        if(err) throw err
        else{
            res.send(result)
        }
    })
})

module.exports=Users