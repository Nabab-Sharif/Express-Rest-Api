

const mongoose = require("mongoose")
const DataSchema = mongoose.Schema(
  {

    Name: { type: String },
    Roll: { type: Number },
    Mobile: {
      type: String,
      validate: {
        validator: function (value) {
          if (value.length === 11) {
            return true
          } else {
            return false
          }
        },
        message:"11 Digit Mobile Number Required"
      }
    },

    Class: { type: String }

  }, { versionKey: false })

const StudentsModel = mongoose.model('students', DataSchema);
module.exports = StudentsModel;




