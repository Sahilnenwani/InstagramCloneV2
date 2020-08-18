const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const requiredLogin = require('../../middleware/requireLogin')
const Post = mongoose.model("Post")

router.get('/allpost',(req,res)=>{

    Post.find()
    .populate("postedBy","_id name")
    .then(posts=>{
        res.json({posts})
    })
    .catch(err=>console.log(err))

})


module.exports = router