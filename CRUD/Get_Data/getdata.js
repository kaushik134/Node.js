const express = require("express")
getdata = express.Router()

const mongodb = require("mongodb")
// const url = "mongodb://localhost:27017"
const mongoClient = mongodb.MongoClient
const url = "mongodb+srv://admin:admin@cluster0.gx72wkp.mongodb.net/?retryWrites=true&w=majority"

getdata.get("/",(req,res)=>{
    mongoClient.connect(url,(err,connection)=>{
        if(err) throw err
        else{
            const db = connection.db("books")
            db.collection("books_n").find().toArray((err,arr)=>{
                console.log(arr);
                
            })
        }
    })
})

module.exports=getdata