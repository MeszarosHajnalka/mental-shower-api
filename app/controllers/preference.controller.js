const { response } = require("express");
const db = require("../models");
const Preference = db.preference;
const Op = db.Sequelize.Op;

exports.findAll = (req, res) => {
    Preference.findAll()
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving preferences."
            });
        });
};

exports.create = (req, res) => {
    const body = req.body
    const structValid = (!body.user_id || body.name || body.temperature || body.humidity || body.airspeed)

    if (!structValid) {
        res.status(400).send({
            message: "Must contain: user_id, name, temperature, humidity, airspeed"
        });
        return;
    }

    const preference = {
        user_id: body.user_id,
        name: body.name,
        temperature: body.temperature,
        humidity: body.humidity,
        airspeed: body.airspeed
    }

    Preference.create(preference)
        .then(data => {
            res.status(201).send(data)
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating preferenc."
            });
        })
};

exports.delete = (req,res) => {
    const id = req.params.id;

    Preference.destroy({
        where:{id:id}
    })
    .then( result => {
        if(result === 1){
            res.status(204).send()
            return;
        }
        res.status(404).send({message:"Preference does not exists."})
    })
    .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while removing preference."
        });
      });
};

