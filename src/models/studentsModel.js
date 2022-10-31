

const mongoose = require("mongoose")
const DataSchema = mongoose.Schema(
  {

    Name: { type: String },
    Roll: { type: Number },
    Mobile: {
      type: String,
      validate: {
        validator: function (value) {
          return /(^(\+88|0088)?(01){1}[3456789]{1}(\d){8})$/.test(value)
        },
        message: "11 Digit Mobile Number Required"
      }
    },

    Class: { type: String }

  }, { versionKey: false })

const StudentsModel = mongoose.model('students', DataSchema);
module.exports = StudentsModel;




