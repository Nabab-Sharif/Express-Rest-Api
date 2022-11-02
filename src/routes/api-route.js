
//

const express =require("express");
const router = express.Router();
const StudentsController = require("../controllers/studentsController");
const JWTPractice=require("../controllers/JWTPractice");





//Mongooes
router.post("/InsertStudent", StudentsController.InsertStudent)
router.get("/ReadStudent", StudentsController.ReadStudent);
router.post("/UpdateStudent/:id",StudentsController.UpdateStudent);
router.get("/DeleteStudent/:id",StudentsController.DeleteStudent);



//Create JWT Token
router.get("/CreateToken",JWTPractice.CreateToken);

//Decode JWT Token
router.get("/DecodeToken",JWTPractice.DecodeToken);



module.exports = router;
