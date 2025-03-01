const User=require("../models/user.model");
const Appointment=require("../models/appointment");
const {createObjectCswriter}=require("csv-writer");
const path=require("path");
const generateReport=async()=>{
    const doctors=await  User.countDocuments({role:"doctor"});
    const patients=await  User.countDocuments({role:"patient"});
    const appointments= await Appointment.countDocuments();
    const csvFilePath=path.join(__dirname,"../reports/report.csv");
    const csvwriter = createObjectCsvWriter({
        path: csvfilepath,
        header:[
                {id:"doctors",title:"Total Doctors"},
                {id:"patients",title:"Total Doctors"},
                {id:"appointments",title:"Total Doctors"},
        ],
    });
    await csvwriter.writeRecords([{doctors,patients,appointments}])
    return csvFilePath;
};
module.exports=generateReport;