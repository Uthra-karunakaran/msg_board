const express= require("express");
const newmsgRouter=express.Router();  //router
const messages=require("../messages");
newmsgRouter.get("/",(req,res)=>{
    res.render("form");
})
newmsgRouter.post("/",(req,res)=>{
    console.log("hey there")
    messages.push({text:req.body.msgtext , user:req.body.sender , added:new Date()});
    res.redirect("/");  
})


module.exports = newmsgRouter;