const express = require("express")
const mongoose = require("mongoose")
const category = require("../Models/Category")
route=express.Router()

route.use(express.json())
route.use(express.urlencoded())


/*
Category.post("/insert",(req,res)=>{
    category.insertMany(req.body,(err,result)=>{
        if(err) throw err
        else{
            console.log(result);
            res.send(result)
        }
    })
})
*/

route.post("/insert",async(req,res)=>{

    let categoryData = new category({
        id : req.body.id,
        name : req.body.name,
        color : req.body.color,
        icon : req.body.icon,
        image : req.body.image,
    })

    res.send(categoryData)
    categoryData = await categoryData.save()
    if(!categoryData) return res.status(500).send("The category cannot be created")

})

route.get("/find",(req,res)=>{
    category.find({},(err,result)=>{
        if(err) throw err
        else{
            res.send(result)
        }
    })
})

module.exports=route