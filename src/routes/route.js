const express = require('express');
const router = express.Router();
let players =
   [
       {
           "name": "manish",
           "dob": "1/1/1995",
           "gender": "male",
           "city": "jalandhar",
           "sports": [
               "swimming"
           ]
       },
       {
           "name": "gopal",
           "dob": "1/09/1995",
           "gender": "male",
           "city": "delhi",
           "sports": [
               "soccer"
           ]
       },
       {
           "name": "lokesh",
           "dob": "1/1/1990",
           "gender": "male",
           "city": "mumbai",
           "sports": [
               "soccer"
           ]
       },
   ]

router.post('/createPlayer', function(req,res){
   let x= req.body
   let nameRepeat=false
   for(let i=0;i<players.length;i++){
       if(players[i].name===x.name){
           nameRepeat=true
           break;
       }

       if(nameRepeat){
          res.send("Name already exists") 
       } else {
           players.push(x)
           
       }
   }
   res.send({data : players})
})

module.exports = router;