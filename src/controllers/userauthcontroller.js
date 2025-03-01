const User = require("../models/user.model");
var jwt = require('jsonwebtoken');
const generateToken = (id, role) => {
    return jwt.sign({ id, role }, process.env.JWT_SECRET, { expiresIn: "7d" });
};
exports.registeruser = async (req, res) => {
    try {
        const { name, email, mobileNumber, password, role, specialization, availableDays } = req.body;
        let user = await User.findOne({ email });
        if (user) return res.status(400).json({ msg: "user already exists" })
            user = await User.create({
            name, email, mobileNumber, password, role, specialization: role === "doctor" ? specialization : undefined, availableDays: role === "doctor" ? availableDays : undefined
        });
        res.status(201).json({
            _id:user.id,
            name:user.name,
            email:user.email,
            role:user.role,
            token:generateToken(user.id,user.role),
        }); 
    }catch(err){
        res.status(500).json({msg:err.message})
    }
};
exports.loginuser = async (req, res) => {
    try {
        const { email,password } = req.body;
        let user = await User.findOne({ email });
        if (user) return res.status(400).json({ msg: "invalid credentials" })
          const isMatch= await user.matchPassword(password);
        if(!isMatch) return res.status(400).json({msg:"invalid credentials"})
        res.json({
            _id:user.id,
            name:user.name,
            email:user.email,
            role:user.role,
            token:generateToken(user.id,user.role),
        }); 
    }catch(err){
        res.status(500).json({msg:err.message})
    }
};
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