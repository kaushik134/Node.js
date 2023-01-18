const monogoose = require("mongoose")

const ProductSchema = new monogoose.Schema({
    id:{type:String,required:true},
    name:{type:String,required:true},
    description:{type:String,required:true},
    richDescription:{type:String,required:true},
    image:{type:String,required:true},
    images:{type:String,required:true},
    brand:{type:String,required:true},
    price:{type:Number,required:true},
    category:{type:mongoose.Schema.Types.ObjectId,required:true},
    countstock:{type:Number,required:true},
    ratting:{type:Number,required:true},
    isFeatured:{type:Boolean,required:true},
    dateOrdered:{type:Date,required:true},
})

const products = monogoose.model("Products",ProductSchema)

module.exports=products