module.exports = app => {
    const zone = require("../controllers/zone.controller.js");
  
    var router = require("express").Router();
  
    // Create a new Tutorial
    router.post("/", zone.create);
  
    // Retrieve all Zone
    router.get("/", zone.findAll);
  
    // Retrieve all published Zone
    router.get("/published", zone.findAllPublished);

    router.get("/classId/:id",zone.findAllZonesWithThatClass);
  
  
    // Retrieve a single Tutorial with id
    router.get("/:id", zone.findOne);
  
    // Update a Tutorial with id
    router.put("/:id", zone.update);
  
    // Delete a Tutorial with id
    router.delete("/:id", zone.delete);
  
    // Create a new Tutorial
    router.delete("/", zone.deleteAll);
  
    app.use('/api/zone', router);
  };