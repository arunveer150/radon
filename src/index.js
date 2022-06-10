const express = require('express');
const bodyParser = require('body-parser');
const route = require('./routes/route.js');
const mongoose = require('mongoose')
const Moment = require('moment')
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(
    function(req,res,next){
        let d=Moment()
        let time = d.format("YYYY-MM-DDTHH:mm:ss.ms")
        let ip = req.socket.remoteAddress
        let url =  req.originalUrl
      
        console.log(time +" ,"+ ip +" ,"+ url )
        next()
    }
)

mongoose.connect("mongodb+srv://arunveer150:Arun-123@cluster0.50bdq.mongodb.net/Populate-Reference-Assignment-4new?retryWrites=true&w=majority", {
    useNewUrlParser: true
})
.then( () => console.log("MongoDb is connected"))
.catch ( err => console.log(err) )

app.use('/', route);

app.listen(process.env.PORT || 3000, function () {
    console.log('Express app running on port ' + (process.env.PORT || 3000))
});
