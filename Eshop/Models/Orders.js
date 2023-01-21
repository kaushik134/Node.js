const mongoose = require("mongoose")

const OrdersSchema = new mongoose.Schema({
    orderitems:
    {
        type:Array,
        required:true
    },
    shippingAddress1:
    {
        type:String,
        required:true
    },
    shippingAddress1:
    {
        type:String,
        required:true
    },
    city:
    {
        type:String,
        required:true
    },
    zip:
    {
        type:String,
        required:true
    },
    country:
    {
        type:String,
        required:true
    },
    phone:
    {
        type:Number,
        required:true
    },
    status:
    {
        type:String,
        required:true
    },
    totalprice:
    {
        type:Number,
        required:true
    },
    user:
    {
        type:mongoose.Schema.Types.ObjectId,
        ref : "Users",
        required:true
    },
    dateOrdered:
    {
        type:Date,
        default:Date.now()
    },
})

OrdersSchema.virtual("id").get(function (){
    return this._id.toHexString()
})

OrdersSchema.set("toJSON",{
    virtuals:true
})

const order = mongoose.model("Orders",OrdersSchema)

module.exports=order