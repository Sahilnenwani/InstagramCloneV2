const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const Post = mongoose.model("Post")
const requiredLogin = require('../../middleware/requireLogin')


router.get('/allpost',requiredLogin,(req,res)=>{
// populate use which thing you want to seen in api 
    Post.find()
    .populate("postedBy","_id name")
    .then(posts=>{
        res.json({posts})
    })
    .catch(err=>console.log(err))

})






 module.exports = router