const express= require("express");
const app = express(); // server
const router=express.Router();  //router
const path=require("path"); //path
const inexRounter= require("./routes/indexRouter");
const newmsgRouter=require("./routes/newmsgRouter");
require('dotenv').config();
const PORT = process.env.PORT ||8080;

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: true }));
  

app.use("/new",newmsgRouter);
app.use("/",inexRounter);



app.listen(PORT,()=>console.log(`server running on port ${PORT}`));
