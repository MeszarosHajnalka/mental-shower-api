const db = require("../models");
const Zone = db.zones;
const Op = db.Sequelize.Op;

// Create and Save a new Zone
exports.create = (req, res) => {
  console.log('create: ' + req);
  // Validate request
  if (!1==1) {
    console.log('yes no comply');
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }

  // Create a Zone
  const zone = {
   
    zone_id: req.body.zone_id,
    class_id:req.body.class_id,
   description:req.body.description
    
  };

  // Save zone in the database
  Zone.create(zone)
    .then(data => {
        console.log(data);
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the zone."
      });
    });
};

// Retrieve all Zones from the database.
exports.findAll = (req, res) => {
    Zone.findAll()
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving zones."
        });
      });
  
};

// Find a single Zone with an id
exports.findOne = (req, res) => {
    const id = req.params.id;

    Zone.findByPk(id)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message: "Error retrieving Zone with id=" + id
        });
      });
  
};

// Update a Zone by the id in the request
exports.update = (req, res) => {
    const id = req.params.id;

    Zone.update(req.body, {
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Zone was updated successfully."
          });
        } else {
          res.send({
            message: `Cannot update Zone with id=${id}. Maybe Zone was not found or req.body is empty!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error updating Zone with id=" + id
        });
      });
  
};

// Delete a Zone with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;

    Zone.destroy({
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Zone was deleted successfully!"
          });
        } else {
          res.send({
            message: `Cannot delete Zone with id=${id}. Maybe Zone was not found!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete Zone with id=" + id
        });
      });
  
};

// Delete all Zones from the database.
exports.deleteAll = (req, res) => {
    Zone.destroy({
        where: {},
        truncate: false
      })
        .then(nums => {
          res.send({ message: `${nums} Zones were deleted successfully!` });
        })
        .catch(err => {
          res.status(500).send({
            message:
              err.message || "Some error occurred while removing all zones."
          });
        });
    
};

// Find all published Zones
exports.findAllPublished = (req, res) => {
    Zone.findAll({ where: { published: true } })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving zones."
      });
    });

};