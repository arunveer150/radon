const printDate= function(){
    const a=new Date()
    console.log("Current Date:" + a)
}

const printMonth= function(){
    const b=new Date()
    console.log("Current Month" + b)
}

const getBatchInfo= function(){
    console.log("Roadon, W3D1, the topic for today is Nodejs module system")
}

module.exports.date=printDate
module.exports.month=printMonth
module.exports.batch=getBatchInfo