module.exports = app => {
    const zonerecord = require("../controllers/zonerecord.controller.js");
  
    var router = require("express").Router();
  
    // Create a new Tutorial
    router.post("/", zonerecord.create);
  
    // Retrieve all ZoneRecord
    router.get("/", zonerecord.findAll);
  
    // Retrieve all published ZoneRecord
    router.get("/published", zonerecord.findAllPublished);
  
    // Retrieve a single Tutorial with id
    router.get("/:id", zonerecord.findOne);
  
    // Update a Tutorial with id
    router.put("/:id", zonerecord.update);
  
    // Delete a Tutorial with id
    router.delete("/:id", zonerecord.delete);
  
    // Create a new Tutorial
    router.delete("/", zonerecord.deleteAll);
  
    app.use('/api/zonerecord', router);
  };