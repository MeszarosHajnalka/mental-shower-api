module.exports = app => {
    const classroom = require("../controllers/classroom.controller.js");
  
    var router = require("express").Router();
  
    // Create a new Tutorial
    router.post("/", classroom.create);
  
    // Retrieve all Classroom
    router.get("/", classroom.findAll);
  
    // Retrieve all published Classroom
    router.get("/published", classroom.findAllPublished);
  
    // Retrieve a single Tutorial with id
    router.get("/:id", classroom.findOne);
  
    // Update a Tutorial with id
    router.put("/:id", classroom.update);
  
    // Delete a Tutorial with id
    router.delete("/:id", classroom.delete);
  
    // Create a new Tutorial
    router.delete("/", classroom.deleteAll);
  
    app.use('/api/classroom', router);
  };