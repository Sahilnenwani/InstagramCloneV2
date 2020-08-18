const express = require('express');
const mongoose = require('mongoose');


const app = express()
const PORT = process.env.PORT || 5000;


const db = require("./config/key").mongoURI;

// defined models
require('./models/users/user')
require('./models/posts/post')
app.use(express.json())


// this is user login and session routes
//signup Postroutes
app.use(require('./routes/auth/signup.routes'))
//signin Postroutes
app.use(require('./routes/auth/signin.routes'))
//protected Getroutes
app.use(require('./routes/auth/protected.routes'))


//this is post routes
//createpost Postroutes
app.use(require('./routes/post/createpost.routes'))
//allpost Getroutes
app.use(require('./routes/post/allpost.routes'))



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