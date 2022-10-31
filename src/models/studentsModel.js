

const mongoose = require("mongoose")
const DataSchema = mongoose.Schema(
  {

    Name:{type:String},
    Roll:{
      type:Number,
      min:[6,'Min 6 & Max 12, But Supplied Value is ={VALUE}'],  
      max:[12,'Min 6 & Max 12, But Supplied Value is ={VALUE}']
    },
    Class:{type:String,required:true}

  }, { versionKey: false })

const StudentsModel = mongoose.model('students', DataSchema);
module.exports = StudentsModel;




