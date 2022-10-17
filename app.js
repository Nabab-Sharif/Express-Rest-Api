
const express = require("express");
const app = new express();
const router = require("./src/routes/api-route");

<<<<<<<<< Temporary merge branch 1
=========
//Security Middleware Import 
const rateLimit = require("express-rate-limit");
const helmet = require("helmet");
const mongoSanitize = require("express-mongo-sanitize");
const xss = require("xss-clean");
const hpp = require("hpp");
const cors = require("cors");


//Security Middleware Implement
app.use(cors());
app.use(helmet());
app.use(mongoSanitize());
app.use(xss());
app.use(hpp());


//Request Rate Limiting 
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, //15 minutes
  max: 100 //Limit each IP to 100 requests per windowMs

})

app.use(limiter);





>>>>>>>>> Temporary merge branch 2


app.use("/api/v1", router);


<<<<<<<<< Temporary merge branch 1
//Undefined Route
app.use("*",(req,res)=>{
  res.status(404).json({status:"fail",data:"Not found"});
=========



//Undefined Route
app.use("*", (req, res) => {
  res.status(404).json({ status: "fail", data: "Not found" });
>>>>>>>>> Temporary merge branch 2
})


module.exports = app;