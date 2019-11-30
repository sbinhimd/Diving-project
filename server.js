const express = require('express')
const app = express()
const path = require("path");
const mongoose = require("mongoose");
const cors = require('cors')
const methodOverride = require('method-override') 

require('dotenv/config')

const PORT = 5000 || process.env.PORT

var allowedOrigins = ["http://localhost:5000", "http://localhost:3000"];

app.use(
  cors({
    origin: function(origin, callback) {
      if (!origin) return callback(null, true);
      if (allowedOrigins.indexOf(origin) === -1) {
        var message =
          "The CORS policy for this application does not allow access from origin " +
          origin;
        return callback(new Error(message), false);
      }
      return callback(null, true);
    }
  })
);

app.use(express.static(path.join(__dirname, "build")));

app.use(express.json())
app.use(cors())
app.use(express.urlencoded({ extended: false }));
app.use(methodOverride('_method'))
app.set('view engine', 'ejs')
app.use('api/trips' , require('./backend/routes/trip'))
app.use('api/trip' , require('./backend/routes/tripJson'))
app.use('api/corses' , require('./backend/routes/corses'))
app.use('api/corsess' , require('./backend/routes/corsesJson'))
app.use('api/Profile' , require('./backend/routes/Profile'))
app.use('api/user' , require('./backend/routes/user'))
app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

mongoose.connect(
   process.env.DB_CONNECTION,
   { useNewUrlParser: true, useUnifiedTopology: true },
   () => {
     console.log(`connect tho mongoDB`);
   }
 );

 app.listen(PORT, () => {
     console.log(`running on ${PORT}`);
     
 });
