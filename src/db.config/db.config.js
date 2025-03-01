const mongoose =require("mongoose");
require("dotenv").config();

const connecttoDb=async()=>{
    try{
        const connect=await mongoose.connect(process.env.MONGO_URL)
        console.log("mongo db connected successfully")
        }
    catch(err){
        console.error("error db connection",err)
        process.exit(1);
    }
}
module.exports=connecttoDb;