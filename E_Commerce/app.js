const express = require("express")
const app = express()
require("dotenv/config")

const morgan = require("morgan") // use to http request
const mongoose = require("mongoose")


app.use(express.urlencoded())
app.use(express.json())
app.use(morgan("tiny"))

mongoose.set("strictQuery")
mongoose.pluralize(null)
mongoose.connect(process.env.connecting_string)
.then(()=>{
    console.log("database connected");
})
.catch((Error)=>{
    console.log(Error);
})

app.get("/", (req, res) => {
    console.log("inside the app.js");
    res.send("inside the server")
})
app.listen(process.env.port, () => {
    console.log(`server listen  ${process.env.port}`);
})