const db = require("../models");
const Classroom = db.classroom;
const Op = db.Sequelize.Op;

// Create and Save a new Classroom
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

  // Create a Classroom
  const classroom = {
   
    
    class_id:req.body.class_id,
    classroomname: req.body.classroomname
   //description:req.body.description
    
  };

  // Save classroom in the database
  Classroom.create(classroom)
    .then(data => {
        console.log(data);
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the classroom."
      });
    });
};

// Retrieve all Classrooms from the database.
exports.findAll = (req, res) => {
    Classroom.findAll()
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving classrooms."
        });
      });
  
};

// Find a single Classroom with an id
exports.findOne = (req, res) => {
    const id = req.params.id;

    Classroom.findByPk(id)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message: "Error retrieving Classroom with id=" + id
        });
      });
  
};

// Update a Classroom by the id in the request
exports.update = (req, res) => {
    const id = req.params.id;

    Classroom.update(req.body, {
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Classroom was updated successfully."
          });
        } else {
          res.send({
            message: `Cannot update Classroom with id=${id}. Maybe Classroom was not found or req.body is empty!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error updating Classroom with id=" + id
        });
      });
  
};

// Delete a Classroom with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;

    Classroom.destroy({
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Classroom was deleted successfully!"
          });
        } else {
          res.send({
            message: `Cannot delete Classroom with id=${id}. Maybe Classroom was not found!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete Classroom with id=" + id
        });
      });
  
};

// Delete all Classrooms from the database.
exports.deleteAll = (req, res) => {
    Classroom.destroy({
        where: {},
        truncate: false
      })
        .then(nums => {
          res.send({ message: `${nums} Classrooms were deleted successfully!` });
        })
        .catch(err => {
          res.status(500).send({
            message:
              err.message || "Some error occurred while removing all classrooms."
          });
        });
    
};

// Find all published Classrooms
exports.findAllPublished = (req, res) => {
    Classroom.findAll({ where: { published: true } })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving classrooms."
      });
    });

};