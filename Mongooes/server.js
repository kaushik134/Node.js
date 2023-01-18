const express = require("express")
const cors = require("cors")
const mongoose = require("mongoose")

const app = express()
const port = 3300
const data = require("./data")
const User = require("./userModel")

mongoose.set("strictQuery",true)

app.use(cors())
app.use(express.json())
app.use(express.urlencoded())

// app.get("/",(req,res)=>{
//     console.log("inside server");
// })

mongoose.connect("mongodb+srv://admin:admin@cluster0.gx72wkp.mongodb.net/?retryWrites=true&w=majority",{
    useNewUrlParser:true,
    useUnifiedTopology:true,
})
.then(()=>console.log("connect"))
.catch((err)=>{
    console.log(err);
})

app.post("/insert",(req,res)=>{
    console.log(data.users);
    const result = User.insertMany(data.users)
    res.send(result)
})

app.get("/getdata",(req,res)=>{
    User.find({},(err,result)=>{
        if(err) throw err
        else{
            console.log(result);
            res.send(result);
        }
    })
})

app.put("/putdata",(req,res)=>{
    User.updateOne({"name":"kaushik1"},{$set:{"email":"kaushik123@gmail.com"}},(err,result)=>{
        if(err) throw err
        else{
            res.send(result)
        }
    })
})

app.delete("/deletedata",(req,res)=>{
    User.deleteOne({"name":"kaushik"},(err,result)=>{
        if(err) throw err
        else{
            res.send(result)
        }
    })
})

app.listen(port,()=>{
    console.log(`server ${port}`);
})