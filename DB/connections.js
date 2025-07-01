const mongoose = require('mongoose')
const connectionString = process.env.DATABASE;
mongoose.connect(connectionString).then((res)=>{
    console.log("mongodb connected sucsessfullly")
}).catch((err)=>{
    console.log("mongodb connection failed")
    console.log(err)
}) 