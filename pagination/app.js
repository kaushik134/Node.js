const { json } = require("express")
const express = require("express")
const mongoose = require("mongoose")
const app = express()
const port = 3300
app.use(express.json)
mongoose.pluralize(null)
const users = require("./Module/books")

mongoose.connect("mongodb+srv://admin:admin@cluster0.gx72wkp.mongodb.net/Eshop?retryWrites=true&w=majority")
  .then(() => {
    console.log("connect");
  })
  .catch((err) => {
    console.log(err);
  })

app.get("/", async (req, res) => {
  await users.find({}, (err, result) => {
    if (err) throw err
    else {
      console.log(result);
    }
  })
})

app.listen(port, () => {
  console.log(`server connected ${port}`);
})