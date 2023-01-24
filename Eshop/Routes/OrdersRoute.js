const express = require("express")
const mongoose = require("mongoose")
route = express.Router()

route.use(express.json())
route.use(express.urlencoded())

const orders = require("../Models/Orders")
const orderitems = require("../Models/orderitems")

route.post("/insert",async(req,res)=>{
    const orderItemId = await Promise.all()





    let order = new orders({
    id : req.body.id,
    orderitems : req.body.orderitems,
    shippingAddress1 : req.body.shippingAddress1,
    shippingAddress2 : req.body.shippingAddress2,
    city : req.body.city,
    zip : req.body.zip,
    country : req.body.country,
    phone : req.body.phone,
    status : req.body.status,
    totalprice : req.body.totalprice,
    user : req.body.user,
    })
    res.send(order)
    order = await order.save()
    if(!order) return res.status(500).send("order cannot be created")
})

module.exports=route