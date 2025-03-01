const express=require("express");
const{bookappointment,getpatientappointment,updatepatientappointment,deletereqappointment}=require("../controllers/patient.controller");
const router=express.Router();
router.post("/appointments",bookappointment);
router.get ("/appointments",getpatientappointment);
router.put("appointments/:id",updatepatientappointment);
router.delete("/appointments/request-delete/:id",deletereqappointment);
module.exports=router;
