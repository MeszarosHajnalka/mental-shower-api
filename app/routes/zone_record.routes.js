module.exports = app => {
    const zone_record = require("../controllers/zone_record.controller.js");
  
    var router = require("express").Router();
  
    // Create a new Tutorial
    router.post("/", zone_record.create);
  
    // Retrieve all Zone_record
    router.get("/", zone_record.findAll);
  
    // Retrieve all published Zone_record
    router.get("/published", zone_record.findAllPublished);
  
    // Retrieve a single Tutorial with id
    router.get("/:id", zone_record.findOne);
  
    // Update a Tutorial with id
    router.put("/:id", zone_record.update);
  
    // Delete a Tutorial with id
    router.delete("/:id", zone_record.delete);
  
    // Create a new Tutorial
    router.delete("/", zone_record.deleteAll);
  
    app.use('/api/zone_record', router);
  };