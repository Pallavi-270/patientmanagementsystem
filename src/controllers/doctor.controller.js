const Appointment=require("../models/appointment");
exports.getdoctorappointment= async (req,res)=>{
    try{
        const appointments =await Appointment.find({doctorId:req.user.id}).populate("patientId","name","email")
                res.json(appointments);
            }catch(err){
                res.status(500).json({msg:err.message})
            };

}
exports.updateappointment= async(req,res)=>{
    try{
        const appointment = await Appointment.findById(req.params.id);
        if(!appointment||appointment.patientId.toString()!==req.user.id)
            return res.status(404).json({msg:"appointmentnot found"})
    }catch(err){
        res.status(500).json({msg:err.message})
    };
}