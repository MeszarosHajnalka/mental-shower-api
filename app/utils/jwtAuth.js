const jwt = require("jsonwebtoken");

const createToken = (username, id) => jwt.sign({ username, id }, process.env.TOKEN_SECRET, { expiresIn: "1800s" });

module.exports = {
  createToken,
};
