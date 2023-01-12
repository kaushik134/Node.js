const express = require("express")
const app = express()
const port=3030

app.get("/",(req,res)=>{
    res.json({msg:"inside server"})
})

const getdata = require("./Get_Data/getdata")
app.use("/getdata",getdata)

const putdata = require("./Put_Data/putdata")
app.use("/putdata",putdata)

const postdata = require("./Post_Data/postdata")
app.use("/postdata",postdata)

const deletedata = require("./Delete_Data/delete")
app.use("/deletedata",deletedata)

app.listen(port,()=>{
    console.log(`server ${port}`);
})