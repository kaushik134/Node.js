const express = require("express")
postdata = express.Router()

const mongodb = require("mongodb")
const mongoClient = mongodb.MongoClient
// const url = "mongodb+srv://admin:admin@cluster0.gx72wkp.mongodb.net/?retryWrites=true&w=majority"
const url = "mongodb://localhost:27017"

postdata.post("/",(req,res)=>{
    mongoClient.connect(url,(err,connection)=>{
        if(err) throw err
        else{
            // const db = connection.db("stud")
            // // res.send(req.body)
            // db.collection("student").insertOne({ "id":req.body.id,
            //                                     "name":req.body.name,
            //                                     "class":req.body.class,
            //                                     "CGPA":req.body.CGPA},(err,result)=>{
                
            //     if(err) throw err
            //     else{
            //         res.send({"insert":"success"})
            //     }
            // })
            const db= connection.db("books")
            db.collection("books").insertOne({"abc":req.body.abc,
                                                "name":req.body.name})
        }
    })
})

module.exports=postdata