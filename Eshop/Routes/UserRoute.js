const express = require("express")
const mongoose = require("mongoose")
route=express.Router()

route.use(express.json())
route.use(express.urlencoded())

const user = require("../Models/User")

/*
route.post("/insert",(req,res)=>{
    user.insertMany(req.body,(err,result)=>{
        if(err) throw err
        else{
            console.log(result);
            res.send(result)
        }
    })
})
*/

route.post("/insert",async(req,res)=>{
    let users = new user({
    id : req.body.id,
    name : req.body.name,
    email : req.body.email,
    password : req.body.password,
    street : req.body.street,
    apartment : req.body.apartment,
    city : req.body.city,
    zip : req.body.zip,
    country : req.body.country,
    phone : req.body.phone,
    isAdmin : req.body.isAdmin,
    })
    res.send(users)
    users = await users.save()
    if(!users) return res.status(500).send("the user cannot be created")
})

route.get("/find",(req,res)=>{
    user.find({},(err,result)=>{
        if(err) throw err
        else{
            res.send(result)
        }
    })
})

module.exports=route