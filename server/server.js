const express = require('express');


const app = express()
const PORT = process.env.PORT || 5000;


app.get('/',(req,res)=>{
    res.send("Server Is Running!");
})
app.listen(PORT,()=>{
    console.log(`Server is runnig http://localhost:${PORT}/`)
})