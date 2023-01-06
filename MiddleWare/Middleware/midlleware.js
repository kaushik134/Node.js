const tokenObjct = require("../Token/token")
const middleware = (req,res,next)=>{
    const headerToken = req.headers.token
    if(headerToken==tokenObjct.token){
        next()
    }else{
        res.json({msg:"failed"})
    }
}
module.exports=middleware