const Redis=require("ioredis");
const Appointment=require("../models/appointment");
const redisClient=new Redis (process.env.REDIS_URL);
const processDeletionRequests=async()=>{
    try{
        const requests=await redisClient.lRange("deleteRequests",0,-1);
        await Promise.all(requests.map(id =>Appointment.findByIdAndDelete(id)));
        await redisClient.del("deleteRequests");
        console.log("processed appointment")
    }catch(err){
        console.error("error processing ",err)
    }
};
setInterval(processDeletionRequests,2*60*1000);
module.exports=redisClient;