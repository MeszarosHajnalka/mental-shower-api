module.exports = app => {
    const user = require("../controllers/user.controller.js");
    var router = require("express").Router();
  
    router.get("/", user.findAll);
    router.post("/", user.create)
    router.post("/login", user.authenticate)
    
    app.use('/api/user', router);
  };
  