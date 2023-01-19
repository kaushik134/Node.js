const mongoose = require("mongoose")

const OrdersSchema = new mongoose.Schema({
    id:{type:String,required:true},
    orderitems:{type:Array,required:true},
    shippingAddress1:{type:String,required:true},
    shippingAddress1:{type:String,required:true},
    city:{type:String,required:true},
    zip:{type:String,required:true},
    country:{type:String,required:true},
    phone:{type:Number,required:true},
    status:{type:String,required:true},
    totalprice:{type:Number,required:true},
    user:{type:Object,required:true},
    dateOrdered:{type:Date,required:true},
})

const order = mongoose.model("Orders",OrdersSchema)

module.exports=order