

const userMid = function(req,res,next){
    data = req.headers
 if(data.hasOwnProperty('isfreeappuser')===true){
    next()

} else {
    res.send({msg : "isFreeAppUser is required"})
}
}

module.exports.userMid=userMid