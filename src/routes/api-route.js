
const express = require("express");
const router = express.Router();
const HelloController = require("../controllers/HelloController");
const StudentsController=require("../controllers/studentsController");



//This is my first get routing
router.get("/hello-get", HelloController.HelloGet);
router.post("/hello-post", HelloController.HelloPost);



//Mongooes
router.post("/InsertStudent",StudentsController.InsertStudent)



module.exports=router;
