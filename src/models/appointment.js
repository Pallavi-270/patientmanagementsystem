const mongoose=require("mongoose");
const appointmentSchema=new mongoose.Schema({
    patientId: {type:mongoose.Schema.Types.ObjectId,ref:"User",required:true} ,
doctorId: {type:mongoose.Schema.Types.ObjectId,ref:"User",required:true} ,
appointmentDateTime: {type:Date,required:true},
symptoms: String,
fees: Number,
prescription: String ,
isDiagnosisDone: {type:Boolean,default:false},
});
module.exports=mongoose.model("Appointment",appointmentSchema)