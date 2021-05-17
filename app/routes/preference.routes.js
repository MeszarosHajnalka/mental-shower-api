module.exports = app => {
    const preference = require("../controllers/preference.controller.js");
    var router = require("express").Router();

    router.get("/", preference.findAll);
    router.get("/:id", preference.findAllByUserId);
    router.get("/pk/:id", preference.findByuser_pref_id);
    router.post("/", preference.create);
    router.delete("/:id", preference.delete);
    router.put("/", preference.update)

    app.use('/api/preference', router);
};
