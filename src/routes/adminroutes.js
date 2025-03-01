const express=require("express");
const{getallUsers,getUserbyId,deleteUser,getappointment,deleteappointment,getReport}=require("../controllers/admin.controller");
const {protect,admin}=require("../middleware/authmiddleware")
const router=express.Router();
router.get("/users",protect,admin,getallUsers);
router.get ("/users/:id",protect,admin,getUserbyId);
router.delete("users/:id",protect,admin,deleteUser);
router.get("/appointments",protect,admin,getappointment)
router.delete("/appointments/:id",protect,admin,deleteappointment);
router.get("/reports",protect,admin,getReport)
module.exports=router;
