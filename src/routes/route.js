const express = require('express');
const router = express.Router();

router.get('/misingNumber-1', function(req,res){
    let arr= [1,2,3,5,6,7]
    let sumOfArrayElement = 0
    let sumOfNumber = 0
    for(let i=0;i<arr.length;i++){
        sumOfArrayElement =sumOfArrayElement  + arr[i]
    }
      
    for(let j=0;j<=(arr[0] + arr.length); j++){
        sumOfNumber=sumOfNumber + j
    }

    let missingNumber = sumOfNumber - sumOfArrayElement
    res.send({data : missingNumber})
})

router.get('/misingNumber-2', function(req,res){
    let arr= [33, 34, 35, 37, 38]
    let sumOfArrayElement = 0
    let sumOfNumber = 0
    for(let i=0;i<arr.length;i++){
        sumOfArrayElement =sumOfArrayElement  + arr[i]
    }
      
    for(let j=arr[0];j<=(arr[0] + arr.length); j++){
        sumOfNumber=sumOfNumber + j
    }

    let missingNumber = sumOfNumber - sumOfArrayElement
    res.send({data : missingNumber})
})

module.exports = router;