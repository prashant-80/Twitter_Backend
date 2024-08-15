const passport = require("passport")

function autheticate(req,res,next){
    passport.authenticate('jwt',(err,user)=>{
        if(err)
            next(err);
        if(!user){
            return res.status(401).json({
                message:"Unathorised user",
            })
        }
        req.user = user;
        next();
    })(req,res,next);
}

module.exports = {
    autheticate
}