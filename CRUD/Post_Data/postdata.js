const express = require("express");
postdata = express.Router();

const mongodb = require("mongodb");
const mongoClient = mongodb.MongoClient;
// const url = "mongodb+srv://admin:admin@cluster0.gx72wkp.mongodb.net/?retryWrites=true&w=majority"
const url = "mongodb://localhost:27017"

postdata.post("/", (req, res) => {
    mongoClient.connect(url, (err, connection) => {
        if (err) throw err;
        else {
            const db = connection.db("books");
            // res.send(req.body)
            db.collection("books_n").insertOne({
                "title": req.body.title,
                "isbn": req.body.isbn,
                "downloadable": req.body.downloadable,
                "no_of_reviews": req.body.no_of_reviews,
                "tags": ['programming'],
                "languages": ['english', 'hindi', 'tamil'],
                'author': { "name": req.body.name, "callname": req.body.callname, "profile": [Object] }
                //{"title" : "","isbn":"","downloadable":"","no_of_reviews":"","name":"","callname":""}
            }, (err, result) => {

                if (err) throw err;
                else {
                    res.send(result)
                    res.json({ "insert": "success" });
                }
            });

        }
    });
});

module.exports = postdata;