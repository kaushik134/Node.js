const mongoose = require("mongoose")

const bookSchema = new mongoose.Schema({
    name:{
        type:String
    },
    email:{
        type:String
    },
    password:{
        type:String
    },
    street:{
        type:String
    },
    appartment:{
        type:String
    },
    city:{
        type:String
    },
    zip:{
        type:String
    },
    country:{
        type:String
    },
    phone:{
        type:Number
    },
    isAdmin:{
        type:Boolean
    }
})

const user = mongoose.model("Users",bookSchema)

module.exports=user