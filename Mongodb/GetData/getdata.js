const express = require("express")
getdata = express.Router()

const mongodb = require("mongodb")
const url = "mongodb+srv://admin:admin@cluster0.gx72wkp.mongodb.net/?retryWrites=true&w=majority"
const mongoClient = mongodb.MongoClient

getdata.get("/",(req,res)=>{
    mongoClient.connect(url,(err,connection)=>{
        if(err) throw err
        else{
            const db = connection.db("books")
            db.collection("books").find().toArray((err,arr)=>{
                console.log(arr);
                res.send(arr)
            })
        }
    })
})

module.exports=getdata