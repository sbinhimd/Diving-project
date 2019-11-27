const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const User = require('../model/User')
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

process.env.SECRET_KEY = 'secret'

router.post('/register' , (req , res) =>{

    const newUser = {
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        email : req.body.email,
        password : req.body.password
    }

    User.findOne({email: req.body.email})
    .then(user =>{

        if(!user){

            bcrypt.hash(req.body.password , 10 ,(err, hash)=>{
                newUser.password = hash
                User.create(newUser)
                //user created 
                .then(user => res.json({msg: 'created successfully',userInf:newUser}))
                .catch(err =>res.send(err))
            })
        }else{
            res.send(`email used !!! change the email`)
        }

    }).catch(err => res.send(err))
})

//login 

router.post('/login' , (req , res)=>{
    User.findOne({email: req.body.email})
    .then(user =>{
        if(user){
            if( bcrypt.compareSync(req.body.password , user.password)){
                user.password = " " //to show empty String in token
                var payload = {user} // to make the the password Hashed 
                let token = jwt.sign(payload , process.env.SECRET_KEY , {expiresIn: 1440})
                res.json({token: token})
            }

            //if password is NOT the same 
            else{
                res.json({error: "Password is NOT correct"}).status(401)
            }
        }
        else{
            res.send("email is NOT found").status(201)
        }
    }).catch(err => res.send(err))
})


// Get user ---->Profile
router.get('/profile', (req , res)=>{
    var decoded = jwt.verify(req.body.token , 'secret')

    User.findById(decoded.user._id)
    .then(user => {
       user.password = ""
        user? res.send(user) : res.send("token is not correct")
    })
    .catch(err => res.send(err))
})



module.exports = router