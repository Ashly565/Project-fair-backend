const jwt = require('jsonwebtoken')

    const jwtMiddleware = (req,res,next)=>{
    console.log("inside jwt middleware");
    //  authorization checking
    if(!req.headers['authorization']){
     res.status(401).json("Authorization failed ,Please login")
    }
    const token = req.headers['authorization'].split(' ')[1];
    console.log('token:',token)
    try{
        // jwt.verify() method is  used to decrypt th token
        const jwtResponse = jwt.verify(token,"userpwd123");
        console.log(jwtResponse)
        req.payload = jwtResponse.userId;
        next();
    }
    catch(err){
        res.status(401).json("Authorization failed ,Please login")
    }
}
module.exports = jwtMiddleware;