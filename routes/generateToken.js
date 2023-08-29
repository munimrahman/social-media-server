const jwt = require("jsonwebtoken");

const generateToken = (userInfo) => {
  const payload = {
    email: userInfo.email,
  };

  const token = jwt.sign(payload, process.env.JWT_SECRET, {
    expiresIn: "1d",
  });

  return token;
};

module.exports = generateToken;
