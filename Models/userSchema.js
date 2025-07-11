
// 1)import mongoose 
const mongoose = require('mongoose')

//2) create Schema
 const userSchema = new mongoose.Schema({
    username:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    github:{
        type:String,
    },
    linkedin:{
        type:String,
    },
    profile:{
        type:String,
    }
 })


//3) create modal
//  mongoose.model() methid is used to create model,it accepts two arguments
// 1)name of the collection that needs to map with this modal
// 2)the schema created
const users = mongoose.model("users",userSchema)


//4) export the modal
module.exports = users;