const fs = require("fs")
const content = "how are you"
// readFile
// fs.readFile("read.txt","utf8",(err,data)=>{
//     if(err){
//         console.log(err)
//     }else{
//         console.log(data)
//     }
// })

// readFileSync
// data=fs.readFileSync("read.txt","utf8");
// console.log(data);



// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// writeFile
// fs.writeFile("write.txt",content,"utf8",(err)=>{
//     if(err){
//         console.log(err)
//     }else{
//         console.log("File Writting Done...")
//     }
// })

// writeFileSync
// data=fs.writeFileSync("write1.txt",content,"utf8");
// console.log(data)



// CopyFile using copyFile method
// fs.copyFile("write.txt","write2.txt",(err)=>{
//     if(err)
//     {
//         console.log(err)
//     }else{
//         console.log("data")
//     }
// })