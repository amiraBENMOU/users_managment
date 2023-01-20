const express=require('express')
const controller=require('../controllers/user')
const axios=require('axios')
const route=express.Router()
//import  Userchema model
const {UserSchema}= require('../models/user')
//connect to the db
require('../db/connect')







route.post('/api/user',controller.create);
route.get('/api/Allusers',controller.findAll);
route.get('/api/user',controller.find),
route.put('/api/user/:id',controller.update);
route.delete('/api/user/:id',controller.delete);
    






module.exports=route