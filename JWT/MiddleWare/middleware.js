const tokenObjct = require("../Token/token")
const jwt = require("jsonwebtoken")
const middleware = (req,res,next)=>{
    const headerToken = req.headers.token
    console.log(headerToken)
    if(headerToken==tokenObjct.token){
        jwt.verify(tokenObjct.token,"skill",function(err,decoded){
            if(err){
                console.log(tokenObject.token);
                res.json({token:"expire"})
            }else{
                next()
            }
        })
    }else{
        res.json({msg:"failed"})
    }
}
module.exports=middleware