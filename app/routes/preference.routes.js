module.exports = app => {
    const preference = require("../controllers/preference.controller.js");
    var router = require("express").Router();

    router.get("/", preference.findAll);
    router.post("/", preference.create);
    router.delete("/:id", preference.delete);

    app.use('/api/preference', router);
};
