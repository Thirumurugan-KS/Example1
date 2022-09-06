const {Router} = require("express");

const homeRoute = Router();

homeRoute.get('/', (req,res)=>{
    res.send("Hello everyone");
});

module.exports = homeRoute;
