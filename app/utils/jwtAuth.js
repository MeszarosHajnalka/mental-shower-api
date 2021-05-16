const jwt = require("jsonwebtoken");

const createToken = (username, id) => jwt.sign({ username, id }, 'isakSECRET', { expiresIn: "1800s" });

module.exports = {
  createToken,
};
