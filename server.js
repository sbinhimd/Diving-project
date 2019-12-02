const express = require('express')
const app = express()
const path = require("path");
const mongoose = require("mongoose");
const cors = require('cors')
const methodOverride = require('method-override') 

require('dotenv/config')

const PORT = process.env.PORT || 5000


app.use(express.json())
app.use(express.static(path.join(__dirname, "build")));
app.use(cors())
app.use(express.urlencoded({ extended: false }));
app.use(methodOverride('_method'))
app.set('view engine', 'ejs')
app.use('/api/trips' , require('./routes/trip'))
app.use('/api/trip' , require('./routes/tripJson'))
app.use('/api/corses' , require('./routes/corses'))
app.use('/api/corsess' , require('./routes/corsesJson'))
app.use('/api/Profile' , require('./routes/profile'))
app.use('/api/user' , require('./routes/user'))
//dev test

mongoose.connect(
   process.env.DB_CONNECTION,
   { useNewUrlParser: true, useUnifiedTopology: true },
   () => {
     console.log(`connect tho mongoDB`);
   }
 );
 //test dev
 app.get("/*", function(req, res) {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

 //i did this
 app.listen(PORT,()=>{
   console.log("server is running");
   
 });
