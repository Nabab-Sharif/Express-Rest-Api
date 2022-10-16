
exports.Hello = (req, res) => {
  res.status(200).json({ status: "success", data: "this is my first express rest api" });
}