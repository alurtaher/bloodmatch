const express = require('express')
const app = express();

app.get('/',(req,res)=>{
    res.status(200).send("Hello User")
})

app.listen(3000,()=>{
    console.log(`Server is listening on 3000..............`)
})