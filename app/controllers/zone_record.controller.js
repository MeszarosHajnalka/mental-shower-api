const db = require("../models");
const Zone_record = db.zone_record;
const Pref = db.preference;
const Op = db.Sequelize.Op;

// Create and Save a new Zone_record
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

  // Create a Zone_record
  const zone_record = {
   
    zone_record_id: req.body.zone_record_id,
    zone_id:req.body.zone_id,
   user_pref_id:req.body.user_pref_id
    
  };


  // Save zone_record in the database
  Zone_record.create(zone_record)
    .then(data => {
        console.log(data);
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the zone_record."
      });
    });
};

// Retrieve all Zone_records from the database.
exports.findAll = (req, res) => {
    Zone_record.findAll()
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving zone_records."
        });
      });
  
};

// Find a single Zone_record with an id
exports.findOne = (req, res) => {
    const id = req.params.id;

    Zone_record.findByPk(id)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message: "Error retrieving Zone_record with id=" + id
        });
      });
  
};

//CALCULATE
exports.getValuesUnit = (req, res) => {
  var valuesConsider = [];
  const id = req.params.id;
  
 // var todays = new Date();
var todays = "5/15/2021"
  Zone_record.findAll({ where: { zone_id:id } })
    .then(data => {
      data.forEach(i => {        
        var d = new Date(i.updatedAt); 
       if(d.toLocaleString().split(',')[0] === todays.toLocaleString().split(',')[0]){
        console.log("heree")   
         valuesConsider.push(i)
               }
console.log(d.toLocaleString().split(',')[0] + todays.toLocaleString().split(',')[0]);
        
      });res.send(valuesConsider);
    
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving zone_records."
      });
    });
    console.log("it is after the catch")



  };
// Update a Zone_record by the id in the request
exports.update = (req, res) => {
    const id = req.params.id;

    Zone_record.update(req.body, {
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Zone_record was updated successfully."
          });
        } else {
          res.send({
            message: `Cannot update Zone_record with id=${id}. Maybe Zone_record was not found or req.body is empty!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error updating Zone_record with id=" + id
        });
      });
  
};

// Delete a Zone_record with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;

    Zone_record.destroy({
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Zone_record was deleted successfully!"
          });
        } else {
          res.send({
            message: `Cannot delete Zone_record with id=${id}. Maybe Zone_record was not found!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete Zone_record with id=" + id
        });
      });
  
};

// Delete all Zone_records from the database.
exports.deleteAll = (req, res) => {
    Zone_record.destroy({
        where: {},
        truncate: false
      })
        .then(nums => {
          res.send({ message: `${nums} Zone_records were deleted successfully!` });
        })
        .catch(err => {
          res.status(500).send({
            message:
              err.message || "Some error occurred while removing all zone_records."
          });
        });
    
};

// Find all published Zone_records
exports.findAllPublished = (req, res) => {
    Zone_record.findAll({ where: { published: true } })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving zone_records."
      });
    });

};