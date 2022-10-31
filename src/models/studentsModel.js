

const mongoose = require("mongoose")
const DataSchema = mongoose.Schema(
  {

    Name:{type:String,unique:true},
    Roll:{type:Number,min:6,max:12},
    Class:{type:String,required:true}

  }, { versionKey: false })

const StudentsModel = mongoose.model('students', DataSchema);
module.exports = StudentsModel;




