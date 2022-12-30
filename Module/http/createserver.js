const http = require('http');
const sever = http.createServer((req,res)=>{
    res.write("request")
    console.log("hello")
    res.end()
});
sever.listen(3000,()=>{
    console.log("server connected")
});