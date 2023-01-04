const express = require("express")
const app = express()
const PORT = 3030

app.use(express.json())

app.get("/",(req,res)=>{
    res.json({msg:"hello"})
    console.log("hello");
})

const login = require("./login")
app.use("/login",login)

app.listen(PORT,()=>{
    console.log(`server listen ${PORT}`);
})