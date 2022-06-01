const string= "  Function Up   "

const trim=function(){
    const a=string.trim()
    console.log("Trim function:" + a)

}

const lower=function(){
    const b= string.toLowerCase()
    console.log("Lower-Case:" + b)
}

const upper=function(){
    const c= string.toUpperCase()
    console.log("Upper-Case:" + c)
}

module.exports.string=string
module.exports.trim=trim
module.exports.lower=lower
module.exports.upper=upper