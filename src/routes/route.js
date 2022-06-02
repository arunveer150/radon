const express = require('express');
const lodash= require('lodash')



const router = express.Router();

router.get('/hello', function (req, res) {

/// Chunk function--------
const a=["january", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
const chunk=lodash.chunk(a,3)
console.log(chunk)


/// Tail function-------
const b=[1,3,5,7,9,11,13,15,17,19]
const tail=lodash.tail(b)
console.log(tail)

// Union function
const c=[1,2,3]
   const d=[1,5,3]
   const e=[2,6,5,4,]
   const f=[9,5,6,4,3]
   const g=[9,4,2,1,5,3,6]

const union=lodash.union(c,d,e,f,g)
console.log(union)

/// from-pairs function
const array1=[["TATA", "TIAGO"],["HYUNDAI", "i20"],["MAHINDRA", "THAR"]]
const pairs=lodash.fromPairs(array1)
console.log(pairs)

res.get("Done")
})
   
router.get('/movie', function(req,res){
    const a=["Iron man", "Captain America", "Hulk", "Thor"]
    console.log(a)
    res.get("Done")
})

router.get('/movie/:indexNumber', function(req,res){
    const a=["Iron man", "Captain America", "Hulk", "Thor"]
    const b=req.params.indexNumber
    const check= function(){
        if(b<a.length){
    console.log("The movie is : " + a[b])
        }
        if(b>=a.length){
            console.log("Enter Valid Index")
        } 
    }
    check()
    res.get("Done")
})

router.get('/films',function(req,res){
    const films=[
        {"id":1,
        "name":"Conjuring"
    },
    {"id":2,
    "name":"Life of a pie"
},
{"id":3,
"name":"Transformer"}
]
 
console.log(films)
res.get("Done")
})

router.get('/films/:filmId', function(req,res){
    const films=[
        {"id":1,
        "name":"Conjuring"
    },
    {"id":2,
    "name":"Life of a pie"
},
{"id":3,
"name":"Transformer"}
]

const b=req.params.filmId
const checkId= function(){
 for(let i=0;i<films.length;i++){
     if(films[i].id===b){
         console.log(films[i])
     }
     else {continue;}
 }
//  for(let i=0;i<films.length;i++){
//      if(films[i].id===b){
//          continue;
//      } else {console.log("No such movie exists here")}
//  }
}
checkId()
 res.get("done")
})



module.exports = router;
// adding this comment for no reason