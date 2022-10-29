
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


//Data Update Here
exports.UpdateStudent = (req, res) => {
  let id = req.params.id;
  let Query = { _id: id };
  let reqBody = req.body;

  StudentsModel.updateOne(Query, reqBody, (err, data) => {
    if (err) {
      res.status(400).json({ status: "fail", data: err });
    } else {
      res.status(200).json({ status: "success", data: data });
    }

  })

}


//Data Delete Here
exports.DeleteStudent = (req, res) => {
  const id = req.params.id;
  const Query = { _id: id };
  StudentsModel.remove(Query, (err, data) => {
    if (err) {
      res.status(400).json({ status: "fail", data: err })
    } else {
      res.status(200).json({ status: "success", data: data })
    }
  })
}

