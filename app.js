
const express = require("express");
const app = new express();
const router = require("./src/routes/api-route");


//Security Middleware Import 
const rateLimit = require("express-rate-limit");
const helmet = require("helmet");
const mongoSanitize = require("express-mongo-sanitize");
const xss = require("xss-clean");
const hpp = require("hpp");
const cors = require("cors");
const mongoose = require("mongoose");

const bodyParser = require("body-parser")

//Security Middleware Implement
app.use(cors());
app.use(helmet());
app.use(mongoSanitize());
app.use(xss());
app.use(hpp());
app.use(bodyParser());

//Request Rate Limiting 
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, //15 minutes
  max: 100 //Limit each IP to 100 requests per windowMs

})

app.use(limiter);


//Mongodb Database Connection
const URI = 'mongodb://127.0.0.1:27017/School'
const option = { user: '', pass: '' };
mongoose.connect(URI, option, (error) => {
  console.log("Connection Success");
  console.log(error);
})




app.use("/api/v1", router);


//Undefined Route
app.use("*", (req, res) => {
  res.status(404).json({ status: "fail", data: "Not found" });

})


module.exports = app;