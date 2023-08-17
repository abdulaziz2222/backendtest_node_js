const express = require("express");
const router = express.Router();
//const Joi = require('joi');

router.get("/",(req,res)=>{
    res.status(200).send("welcome, you are in the index('/') page");
});



module.exports =router;