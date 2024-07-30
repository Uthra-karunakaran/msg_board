const express= require("express");
const indexRouter=express.Router();  //router
const messages=require("../messages");

indexRouter.get("/",(req,res)=>{
    res.render("index",{title:"mini message board",messages:messages});
})

module.exports=indexRouter;