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


// http://localhost:3030/?name=kaushik&pass=kaushik
// app.get("/",(req,res)=>{
//     console.log(req.query)
// })

// http://localhost:3030/kaushik/vaghasiya
// app.get("/:name/:pass",(req,res)=>{
//     console.log(req.params.name)
//     console.log(req.params.name)
//     console.log(req.params)
// })
app.listen(PORT,()=>{
    console.log(`server listen ${PORT}`);
})