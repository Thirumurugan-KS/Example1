const express = require("express");
const dotenv = require("dotenv");

dotenv.config();

const port = process.env.PORT || 8000;
const app = express();

app.get('/:name', (req,res)=>{
    res.send(req.params.name);
})

app.get('/', (req,res)=>{
    res.send("Hello"+process.env.NAME);
})

app.listen(port , ()=>{
    console.log(`App is running at ${port}`);
})