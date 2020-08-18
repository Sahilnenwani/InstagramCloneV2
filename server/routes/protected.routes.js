const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const User = mongoose.model('User')
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const {JWT_SECRET} = require('../config/key')
const requireLogin = require('../middleware/requireLogin')


router.get('/protected',requireLogin,(req,res)=>{
res.send('hello user')
})

module.exports = router