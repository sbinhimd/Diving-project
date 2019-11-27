const mongoose = require("mongoose");
const Schema = mongoose.Schema
const CourseSchema =  new Schema({
  CourseTitle: {
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
  StartDate: String,
  EndDate:String,
  ImageUrl:String,
  overview:String
});

const Courses = mongoose.model('Courses', CourseSchema)
module.exports.Courses = Courses;
