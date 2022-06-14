const jwt = require('jsonwebtoken')

const authMiddleware = async function(req,res,next){ 
     let token=req.headers["is-auth-token"]
    if(!token){
        return res.send({status : false, msg : "is-auth-token Header is missing"})
    }
   
    let checkToken = await jwt.verify(token,"function-up")
    if(!checkToken){
        return res.send({status : false, msg : "Invalid Token"})
    }
    next()
}

module.exports.authMiddleware=authMiddleware

