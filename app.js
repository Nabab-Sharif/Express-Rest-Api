
const express = require("express");
const app = new express();
const router = require("./src/routes/api-route");

app.use("/api/v1", router);


//Undefined Route


//Undefined Route
app.use("*", (req, res) => {
  res.status(404).json({ status: "fail", data: "Not found" });
})


module.exports = app;