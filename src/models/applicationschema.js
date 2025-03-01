const mongoose=require("mongoose");
const appointmentSchema=new mongoose.Schema({
    patientId: {reference:"User"} ,
doctorId: {reference:"User"} ,
appointmentDateTime: DateTime,
symptoms: String,
fees: Number,
prescription: String ,
isDiagnosisDone: Boolean,
})