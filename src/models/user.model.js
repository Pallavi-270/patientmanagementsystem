const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
    name: String,
    email: { type: String, unique: true },
    mobileNumber: String,
    password: String,
    role: { type: String, enum: ["admin", "doctor", "patient"] },
    specialization: {
        type: String, enum: ["nerves", "heart", "lungs", "skin"]
    },
    availableDays: { type: String, enum: ["Sun", " Mon", "Tue", "Wed", "Thu", "Fri", "Sat"] },
});
const userModel=mongoose.Schema("user",userSchema);