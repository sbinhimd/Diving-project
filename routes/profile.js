const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const User = require('../model/User')
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt')

process.env.SECRET_KEY = 'secret'
router.get('/:id', async(req,res)=>{
    //User.findById(req.params.id)
    try {
        var result = await User.findById(req.params.id);
        res.send({result});
    } catch (error) {
        res.send({error})
    }
  })
  router.get('/', async(req,res)=>{
      //User.findById(req.params.id)
      try {
          var result = await User.find();
          res.send({result});
      } catch (error) {
          res.send({error})
      }

      // var decoded = jwt.verify(req.body.token , 'secret')
      //  console.log(decoded);
      
      //      User.findById(decoded.user._id)
      //      .then(user => user?  res.json(decoded.user) : res.send("token is not correct"))
      //      .catch(err => res.send("err"))


      
      
    })
  router.post('/', (req,res)=>{
    //   //User.findById(req.params.id)
    //   let User = new User({
    //       name: req.body.name,
    //       email: req.body.email,
    //       bio: req.body.bio,
    //     });
    //   try {
    //       var data = await User.save()
    //       res.send({data})
    //   } catch (error) {
    //       res.send({error})
    //   }
    })

    //update
    router.put('/edit/:id', async(req,res)=>{
      //User.findById(req.params.id)


///////
User.findById(req.params.id)
.then(user =>{
    if(user){
        if( true){
          //  user.password = " " //to show empty String in token
            var payload = {user} // to make the the password Hashed 
            let token = jwt.sign(payload , process.env.SECRET_KEY , {expiresIn: 1440})

            //dosnt set to front end port
            //localStorage.setItem('usertoken',token)
            

           
      
            res.json({token: token})
        }
    }
    else{
        res.send("email is NOT found").status(201)
    }
}).catch(err => res.send(err))
///////


      try {

          var result = await User.findById(req.params.id);
          res.send({result});
          
          User.findByIdAndUpdate(req.params.id, req.body, {new:true}, (err, updatedModel)=>{
        });
      } catch (error) {
          res.send({error})
      }
    })


    // change the password
router.put('/changePassword/:token' , (req , res)=>{

     var decoded = jwt.verify(req.params.token, 'secret')
    //  console.log(req.body.password)
      bcrypt.hash(req.body.password, 10, (err, hash) => {
          var password = hash
          User.findByIdAndUpdate(decoded.user._id , {password:password  }  )
          .then(user => res.json({msg :`the password has change `  , user :user}))
          .catch(err => res.send(err))
      })

     
    })

 

    module.exports = router;