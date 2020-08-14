const express = require('express');
const mongoose = require('mongoose');


const app = express()
const PORT = process.env.PORT || 5000;


const db = require("./config/key").mongoURI;

mongoose.connect(db, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then(() => console.log("MongoDB Connected...!"))
  .catch((err) => console.log(err));



app.get('/',(req,res)=>{
    res.send("Server Is Running!");
})

app.listen(PORT,()=>{
    console.log(`Server is runnig http://localhost:${PORT}/`)
})