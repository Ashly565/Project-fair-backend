// sample application middleware created for test
const appMiddleware = (req,res,next)=>{
    console.log("inside app middle ware!!!")
    next();
}
module.exports = appMiddleware;