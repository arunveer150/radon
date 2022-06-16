const jwt = require('jsonwebtoken')

const authMiddleware = async function(req,res,next){ 
    try{
    let token=req.headers["is-auth-token"]
    if(!token){
        return res.status(404).send({status : false, msg : "is-auth-token Header is missing"})
    }
   
    let checkToken = await jwt.verify(token,"function-up")
    if(!checkToken){
        return res.status(400).send({status : false, msg : "Invalid Token"})
    }
    
    let modifiedUserId = req.params.userId
    let userIdToken = checkToken.userId
    if(modifiedUserId!=userIdToken){
        return res.status(403).send({status : false , msg : "not allowed to modified another account.........."})
    }
    next()
}
catch(err){
    res.status(500).send({error : err.message})
}
}

module.exports.authMiddleware=authMiddleware

