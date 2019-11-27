const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const TripSchema = new Schema({
  TripTitle: {
    type: String,
    required: true
  },
  Description: {
    type: String,
    required: true
  },
  Price: {
    type: String,
    required: true
  },
  Date:String,
  StartTime :String,
  EndTime :String,
  DeparturePoint:String,
  ImageUrl:String 
});

const Trips = mongoose.model("Trips", TripSchema);
module.exports = Trips;