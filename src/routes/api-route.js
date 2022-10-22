
const express = require("express");
const router = express.Router();
const HelloController = require("../controllers/HelloController");
const StudentsController = require("../controllers/studentsController");



//This is my first get routing
router.get("/hello-get", HelloController.HelloGet);
router.post("/hello-post", HelloController.HelloPost);



//Mongooes
router.post("/InsertStudent", StudentsController.InsertStudent)
router.get("/ReadStudent", StudentsController.ReadStudent);
router.post("/UpdateStudent/:id",StudentsController.UpdateStudent);



module.exports = router;
