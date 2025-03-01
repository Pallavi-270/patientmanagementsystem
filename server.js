const express=require("express");
const connecttoDb=require("./src/db.config/db.config")
require("dotenv").config();
const app=express();
const port=process.env.port;
app.use(express.json());

// routes
app.use("/api/auth",require("./src/routes/authroutes"));
app.use("/api/admin",require("./src/routes/adminroutes"));
app.use("/api/doctor",require("./src/routes/doctorroutes"));
app.use("/api/patient",require("./src/routes/patientroutes"));

app.listen(port,()=>{
    connecttoDb()
    console.log(`server started on ${port}`)
})