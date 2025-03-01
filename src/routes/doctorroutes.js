const express=require("express");
const{getdoctorappointment,updateappointment}=require("../controllers/doctor.controller");
const router=express.Router();
router.get("/appointments",getdoctorappointment);
router.put ("/appointments/:id",updateappointment);
module.exports=router;
