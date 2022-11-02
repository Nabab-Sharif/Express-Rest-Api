
const express = require("express");
const router = express.Router();
const StudentsController = require("../controllers/studentsController");
const TokenCreateController = require("../controllers/TokenCreateController");
const JWTPractice = require("../controllers/JWTPractice");
const TokenVarifyMiddleware = require("../middleware/TokenVarifyMiddleware");




//Apply JWT Auth
router.get("/TokenCreate", TokenCreateController.TokenCreate)

router.post("/InsertStudent", TokenVarifyMiddleware, StudentsController.InsertStudent)
router.get("/ReadStudent", TokenVarifyMiddleware, StudentsController.ReadStudent);
router.post("/UpdateStudent/:id", TokenVarifyMiddleware, StudentsController.UpdateStudent);
router.get("/DeleteStudent/:id", TokenVarifyMiddleware, StudentsController.DeleteStudent);



//Practice JWT Encode and Decode
router.get("/CreateToken", JWTPractice.CreateToken);
router.get("/DecodeToken", JWTPractice.DecodeToken);



module.exports = router;
