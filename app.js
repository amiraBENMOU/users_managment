const express=require('express')
const app=express()
//to connect to the DB
const mongoose=require('mongoose')
 const dotenv = require('dotenv');
const morgan=require('morgan')
 const bodyparse=require('body-parser')
 connectDB=require('./db/connect')
//to remove the uri Error 
dotenv.config();



const port=3000
app.use(morgan('tiny'))

const start = async()=>{
    try{
         
        await connectDB(process.env.MONGO_URI)
        app.listen(port,console.log('server is listening on port  3000'))
    }
    catch (error){
        console.log(error)
    }
}
start()
//pase request to body-parse
app.use(bodyparse.urlencoded({extended:true}))
//the route
const tasks=require('./routes/user')
//midelware 
app.use('',tasks)


