const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//nothing

const profileSchema = new Schema(
  {
    name: {
      type:String,
    required:true
  },
    email: {
      type:String,
    required:true
  },
    bio: {
      type:String,
    required:true
  }
  }, {timestamps:true}
);

const Profile = mongoose.model("Profile", profileSchema);
module.exports = Profile;
