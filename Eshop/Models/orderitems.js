const monogoose = require("mongoose")

const OrdersItemsSchema = new monogoose.Schema({
    id:{type:String,required:true},
    product:{type:mongoose.Schema.Types.ObjectId,required:true},
    quantity:{type:Number,required:true},
})

const orderitems = monogoose.model("Orderitems",OrdersItemsSchema)

module.exports=orderitems