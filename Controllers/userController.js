 const users = require('../Models/userSchema')
 const jwt = require('jsonwebtoken')

//  controller method for user register
exports.register =async (req ,res)=>{
    // store the user details tp db
    // console.log(req.body)
    console.log("inside user register controller")
    const {username,email,password} = req.body
    try{
        const existingUser=await users.findOne({email:email})
        if(existingUser){
         res.status(400).json("Account already exists")
        }
        else{
        console.log("user not exist")
        const newUser = new users({
         username:username,
         email:email,
         password:password,
         github:"",
         linkedin:"",
         profile:""
        });
        //save() method is used for insertion
        await newUser.save();
        res.status(201).json("user registered successfully")
        }
     }
    catch(err){
        res.status(401).json("Register request  failed due to",err)
    }
}

exports.login = async(req,res)=>{
// console.log("inside login controller");
const {email,password}=req.body;
try{
    const existingUser = await users.findOne({email:email,password:password});
    if(existingUser){
        // implementing jwt token
         const token = jwt.sign({userId:existingUser._id},"userpwd123")
        //  console.log(token)
        res.status(200).json(
            {
                data:existingUser,
                token:token
            }) 
    }
    else{
        // console.log("Invalid email or password")
        res.status(401).json("Invalid Email or Passsword")
    }
}catch(err){
res.status(500).json("Internal Server Error")
}

}

exports.getuserdetails=(req,res)=>{
    res.status(200).json("inside get user details controller")
}

