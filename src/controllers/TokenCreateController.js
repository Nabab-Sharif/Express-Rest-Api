const jwt = require('jsonwebtoken');

//Create Token here
exports.TokenCreate = (req, res) => {

  const Payload = {
    exp: Math.floor(Date.now() / 1000) + (60 * 60),

    data: { Name: "Nabab Sharif", City: "Dhaka", admin: true }
  }

  const Token = jwt.sign(Payload, "SecretKey123");
  res.send(Token);

}