const mongoose = require("mongoose");
const bcrypt = require('bcrypt');
const saltRounds = 10;
const userSchema = new mongoose.Schema({
    name: String,
    email: { type: String, unique: true },
    mobileNumber: String,
    password: String,
    role: { type: String, enum: ["admin", "doctor", "patient"] },
    specialization: {
        type: String, enum: ["nerves", "heart", "lungs", "skin"],required:function(){return this.role==="doctor"}
    },
    availableDays: { type: String, enum: ["Sun", " Mon", "Tue", "Wed", "Thu", "Fri", "Sat"] },
    required:function(){return this.role==="doctor"}
});
bcrypt.hash(myPlaintextPassword, saltRounds, function(err, hash) {
    // Store hash in your password DB.
});
bcrypt.compare(myPlaintextPassword, hash, function(err, result) {
    // result == true
});
module.exports =mongoose.Model("User",userSchema);