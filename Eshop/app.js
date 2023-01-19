const express = require("express")
const app = express()

const morgan = require("morgan")
const mongoose = require("mongoose")
const cors = require("cors")
require("dotenv/config")

app.use(cors())
app.options("*",cors())

mongoose.set("strictQuery",true)
app.use(express.json())
app.use(express.urlencoded())
app.use(morgan("tiny"))


mongoose.connect(process.env.CONNECTION_STRING,{
    useNewUrlParser:true,
    useUnifiedTopology:true,
})
.then(()=>console.log("connect"))
.catch((err)=>{
    console.log(err);
})

app.get("/",(req,res)=>{
    console.log("inside server");
})

const userroute = require("./Routes/UserRoute")
app.use("/UserRoute",userroute)

const PORT = process.env.PORT
app.listen(PORT,()=>{
    console.log(`server ${PORT}`);
})