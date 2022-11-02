
const jwt = require('jsonwebtoken');

//Create Token here
exports.CreateToken = (req, res) => {

  const Payload = {
   // exp: Math.floor(Date.now() / 1000) + (60 * 60),
    exp: Math.floor(Date.now() / 1000) + (30),
    data: { Name: "Nabab Sharif", City: "Dhaka", admin: true }
  }

  const Token = jwt.sign(Payload, "SecretKey123");
  res.send(Token);

}

//Decode Token here
exports.DecodeToken = (req, res) => {

  const Token = req.headers['token-key'];

  jwt.verify(Token, "SecretKey123", function (err, decoded) {

    if (err) {
      res.status(401).json({ status: "invalid token", data: err });
    } else {
      res.status(201).json({ status: "success", data: decoded });
    }

  })


}

