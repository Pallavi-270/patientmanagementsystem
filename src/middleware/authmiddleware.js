const jwt = require('jsonwebtoken');
const User=require("../models/user.model")

exports.protect=async (req,res,next)=>{
    try{
        const token=req.headers.authorization?.split("")[1];
        if(!token) return res.status(401).json({msg:"unauthorised"});
        var decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user=await User.findById(decoded.id).select("-password" )
        if(!req.user) return res.status(401).json({msg:"unauthorised"})
            next();
    }catch(err){
        res.status(401).json({msg:"invalidtoken"})
    }
};
exports.admin=(req,res,next)=>{
    if(req.user&& req.user.role==="admin"){
        next();
    }else{
        res.status(403).json({msg:"access denied"})
    }
}
exports.doctor=(req,res,next)=>{
    if(req.user?.role==="doctor")next();
    else res.status(403).json({msg:"access denied"})
}
exports.patient=(req,res,next)=>{
    if(req.user?.role==="patient")next();
    else res.status(403).json({msg:"access denied"})
}
