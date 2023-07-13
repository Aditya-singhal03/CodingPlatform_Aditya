const jwt = require("jsonwebtoken");

// Making MiddleWares to provide authentication.


// verifying the access token
const verifyToken = (req,res,next)=>{
    const autHeader = req.headers.token;
    if(autHeader){
        const token = autHeader.split(" ")[1];
        jwt.verify(token, process.env.JWT_Security_Key, (err,user)=>{
            if(err) res.status(403).json("Token is not valid");
            req.user=user;
            next();
        })
    }else{
        return res.status(401).json("you are not authenticated");
    }
};


//A user is alowed edit its own data or profile, Admin can change others profile.
const verifyTokenAndAuthorization = (req,res,next)=>{
    verifyToken(req,res,()=>{
            if(req.user.id === req.params.id || req.user.role==='admin'){
                next();
            }else{
                res.status(403).json("you are not allowed to do this");
            }
    })
};

//Veryfying if admin
const verifyTokenAndAdmin = (req,res,next)=>{
    verifyToken(req,res,()=>{
            if(req.user.role==="admin"){ // Role can be two things-> admin , participant. 
                next();
            }else{
                res.status(403).json("you are not allowed to do this");
            }
    })
}

module.exports = {verifyToken,verifyTokenAndAuthorization,verifyTokenAndAdmin};