
exports.HelloGet = (req, res) => {
  res.status(200).json({ status: "success", data: "this is my first express rest api" });
}

exports.HelloPost=(req,res)=>{
  res.status(201).json({status:"success",data:"hello post"});
}