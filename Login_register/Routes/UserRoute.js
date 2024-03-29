const express = require("express")
const mongoose = require("mongoose")
const jwt = require("jsonwebtoken")
const bcrypt = require("bcrypt")
route = express.Router()
require("dotenv/config")

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

route.post("/insert", async (req, res) => {
    let users = new user({
        id: req.body.id,
        name: req.body.name,
        email: req.body.email,
        password: bcrypt.hashSync(req.body.password, 10),
        street: req.body.street,
        apartment: req.body.apartment,
        city: req.body.city,
        zip: req.body.zip,
        country: req.body.country,
        phone: req.body.phone,
        isAdmin: req.body.isAdmin,
    })

    users = await users.save()
    if (!users) return res.status(500).send("the user cannot be created")
    else {
        res.send(users)
    }
})

route.post("/login", async (req, res) => {
    const User = await user.findOne({ email: req.body.email })
    const secret = process.env.secret
    if (!User) {
        return res.status(500).send("The user not found")
    }
    if (User && bcrypt.compareSync(req.body.password, User.password)) {
        console.log(User.password);
        const token = jwt.sign({
            userId: User.id,
            isAdmin: User.isAdmin,
        },
            secret,
            {
                expiresIn: "1h"
            }
        )
        res.status(200).send({ email: User.email, token: token })
    }
    else {
        res.status(500).send("password is not valid")
    }
})

route.get("/find", (req, res) => {
    user.find({}, (err, result) => {
        if (err) throw err
        else {
            res.send(result)
        }
    })
})



route.get("/:id",async(req,res)=>{
    const users = await user.findById(req.params.id)
    if(!users) return res.status(500).send("user not found")
    else{
        res.send(users)
    }
})

module.exports = route