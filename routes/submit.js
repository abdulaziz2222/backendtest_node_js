const express = require("express");
const router = express.Router();
const Joi = require('joi');

const emps = [{
    id:1,
    name:"Abdulaziz",
    age:21
},{
    id:2,
    name:"Tamim",
    age:23
},];

router.post("/",(req,res)=>{
    const schema = Joi.object({
        name: Joi.string().trim().min(2).max(30).required(),
        age: Joi.number().min(0).max(123).required(),
    });

    const {error} =schema.validate(req.body);
    if(error){
        return res.status(400).json({message:error.details[0]["message"]});}

    const newEmp = {
        id:emps.length+1,
        name:req.body.name ,
        age:req.body.age
    }   
    emps.push(newEmp);
    res.status(201).json(newEmp);
});

module.exports =router;