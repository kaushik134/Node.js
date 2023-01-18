const monogoose = require("mongoose")

const UserSchema = new monogoose.Schema({
    id:{type:String,required:true},
    name:{type:String,required:true},
    email:{type:String,required:true},
    password:{type:String,required:true},
    street:{type:String,required:true},
    apartment:{type:String,required:true},
    city:{type:String,required:true},
    zip:{type:String,required:true},
    country:{type:String,required:true},
    phone:{type:Number,required:true},
    isAdmin:{type:Boolean,required:true},
})

const user = monogoose.model("Users",UserSchema)

module.exports=user