const router = require('./Router/router')
// const appMiddleware =require('./Middlewares/appMiddleware')

// 1) import dotenv module
require('dotenv').config()

// 2) import express module
const express = require('express')

require('./DB/connections')

// 3) import cors module
const cors = require('cors')

// 4)create seerver using express
const pfServer = express()

// 5)inject cors in to  pfserver
pfServer.use(cors());

// 6) use middleware to convert JSON data to js object
pfServer.use(express.json())

// apply applicataion middleware here
// pfServer.use(appMiddleware)

pfServer.use(router)
// pfserver should expose the uploads folder
pfServer.use('/uploads',express.static('./uploads'))

// 7) provide PORT
const PORT= process.env.PORT || 4000;

// 8) run the server
pfServer.listen(PORT,()=>{
    console.log(`pfServer is running in PORT ${PORT}`)
})

pfServer.get('/',(req,res)=>{
    res.send("server is running and waiting for client requests")
})
