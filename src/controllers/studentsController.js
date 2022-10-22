
const StudentsModel = require("../models/studentsModel");


//Data Create and Insert
exports.InsertStudent = (req, res) => {

  let reqBody = req.body;
  StudentsModel.create(reqBody, (err, data) => {
    if (err) {
      res.status(400).json({ status: "fail", data: err })
    } else {
      res.status(201).json({ status: "success", data: data })
    }

  })
}


//Data Read Here
exports.ReadStudent = (req, res) => {
  let Query = {};
  let Projection = "Name Roll Class Remarks"

  StudentsModel.find(Query, Projection, (err, data) => {
    if (err) {
      res.status(400).json({ status: "fail", data: err });
    } else {
      res.status(201).json({ status: "success", data: data });
    }
  })
}