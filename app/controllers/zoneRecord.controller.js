const db = require("../models");
const ZoneRecor = db.zonerecors;
const Op = db.Sequelize.Op;

// Create and Save a new ZoneRecor
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

  // Create a ZoneRecor
  const zonerecor = {
   
    zonerecor_id: req.body.zonerecor_id,
    class_id:req.body.class_id,
   description:req.body.description
    
  };

  // Save zonerecor in the database
  ZoneRecor.create(zonerecor)
    .then(data => {
        console.log(data);
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the zonerecor."
      });
    });
};

// Retrieve all ZoneRecors from the database.
exports.findAll = (req, res) => {
    ZoneRecor.findAll()
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving zonerecors."
        });
      });
  
};

// Find a single ZoneRecor with an id
exports.findOne = (req, res) => {
    const id = req.params.id;

    ZoneRecor.findByPk(id)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message: "Error retrieving ZoneRecor with id=" + id
        });
      });
  
};

// Update a ZoneRecor by the id in the request
exports.update = (req, res) => {
    const id = req.params.id;

    ZoneRecor.update(req.body, {
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "ZoneRecor was updated successfully."
          });
        } else {
          res.send({
            message: `Cannot update ZoneRecor with id=${id}. Maybe ZoneRecor was not found or req.body is empty!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error updating ZoneRecor with id=" + id
        });
      });
  
};

// Delete a ZoneRecor with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;

    ZoneRecor.destroy({
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "ZoneRecor was deleted successfully!"
          });
        } else {
          res.send({
            message: `Cannot delete ZoneRecor with id=${id}. Maybe ZoneRecor was not found!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete ZoneRecor with id=" + id
        });
      });
  
};

// Delete all ZoneRecors from the database.
exports.deleteAll = (req, res) => {
    ZoneRecor.destroy({
        where: {},
        truncate: false
      })
        .then(nums => {
          res.send({ message: `${nums} ZoneRecors were deleted successfully!` });
        })
        .catch(err => {
          res.status(500).send({
            message:
              err.message || "Some error occurred while removing all zonerecors."
          });
        });
    
};

// Find all published ZoneRecors
exports.findAllPublished = (req, res) => {
    ZoneRecor.findAll({ where: { published: true } })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving zonerecors."
      });
    });

};