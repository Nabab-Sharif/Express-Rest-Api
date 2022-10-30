
const mongoose = require("mongoose")
const DataSchema = mongoose.Schema(
  {

    Name: String,
    Roll: Number,
    Class: String,
    

  },{versionKey:false})
  

const StudentsModel = mongoose.model('students', DataSchema);

module.exports = StudentsModel;
