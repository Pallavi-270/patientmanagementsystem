const express=require("express");
const connecttoDb=require("./src/db.config/db.config")
require("dotenv").config();
const app=express();
const port=process.env.port
app.listen(port,()=>{
    connecttoDb()
    console.log(`server started on ${port}`)
})