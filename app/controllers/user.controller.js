const db = require("../models");
const User = db.user;
const authService = require("../utils/jwtAuth.js")
const jwt = require("jsonwebtoken");


exports.findAll = (req, res) => {
  User.findAll()
    .then((data) => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving users."
      });
    });
};

exports.create = (req, res) => {
  if (!req.body.username || !req.body.password) {
    res.status(400).send({
      message: "Username and password cannot be empty"
    });
    return;
  }

  const user = {
    username: req.body.username,
    password: req.body.password
  };

  User.create(user)
    .then(data => {
      res.status(204).send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the user."
      });
    });
};

exports.authenticate = (req, res) => {
  User.findOne({ where: { username: req.body.username, password: req.body.password } })
    .then(data => {
      if (!data) {
        res.status(404).send({ message: "Incorrect username or password" })
        return
      }
      const token = authService.createToken(data.username, data.id);
      res.send({ token });
    })
    .catch(err => {
      console.log(err)
      res.status(500).send({
        message: "Error on authenticating user."
      });
    });
};