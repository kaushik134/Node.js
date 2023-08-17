const express = require("express")
deletedata = express.Router()

const mongodb = require("mongodb")
const url = "mongodb+srv://admin:admin@cluster0.gx72wkp.mongodb.net/?retryWrites=true&w=majority"
const mongoClient = mongodb.MongoClient

deletedata.delete("/",(req,res)=>{
    mongoClient.connect(url,(err,connection)=>{
        if(err) throw err
        else{
            const db = connection.db("books");
            // res.send(req.body)
            db.collection("books_n").deleteOne(
                {"isbn": req.body.isbn},
                (err, result) => {

                if (err) throw err;
                else {
                    console.log(result);
                    res.json({ "insert": "success" });
                }
            }
            )
        }
    })
})

module.exports=deletedata