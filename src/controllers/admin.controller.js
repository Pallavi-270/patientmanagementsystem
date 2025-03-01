const User=require("../models/user.model");
const Appointment=require("../models/appointment");
const generateReport=require("../utils/generateReport")

exports.getallUsers= async (req, res) => {
    try {
        const user=await User.find() .select("-passwod")
        res.json(user);
    }catch(err){
        res.status(500).json({msg:err.message})
    }
};
exports.getuserbyId= async (req, res) => {
    try {
        const user=await User.findById(req.params.id).select("-passwod")
        if(!user) return  res.status(404).json({msg:"user not found"});
        res.json(user);
    }catch(err){
        res.status(500).json({msg:err.message})
    }
};
exports.deleteUser= async (req, res) => {
    try {
        const user=await User.findByIdAndDelete(req.params.id);
        if(!user) return  res.status(404).json({msg:"user not found"});
        res.json({msg:"user deleted successfully"});
    }catch(err){
        res.status(500).json({msg:err.message})
    }
};
exports.getappointment=async(req,res)=>{
    try{
        const appointments = await Appointment.find();
        populate("patientId","name email")
        .populate("doctorId","name email specialization")
        res.json(appointments);
    }catch(err){
        res.status(500).json({msg:err.message})
    }
}
exports.deleteAppointment= async (req, res) => {
    try {
        const appointment =await Appointment.findById(req.params.id);
        if(!appointment) return  res.status(404).json({msg:"appointment not found"});
        await Appointment.findByIdAndDelete(req.params.id);
        res.json({msg:"user deleted successfully"});
    }catch(err){
        res.status(500).json({msg:err.message})
    }
};
exports.generateReport=async(req,res)=>{
    try{
        const csvFile= await generateReport();
        res.download(csvFile);
    }catch(err){
        res.status(500).json({msg:"report generation failed",err})
    }
}