/ dbConfig = require("../config/db.config.js");

const Sequelize = require("sequelize");
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  operatorsAliases: false,

  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle
  }
});
/*const Sequelize = require("sequelize");
const sequelize = new Sequelize('test', 'root', '', {
  host: "localhost",
  dialect: "mysql",
  port: 3306
});*/
const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.user = require("./user.model.js")(sequelize, Sequelize);
db.preference = require("./preference.model.js")(sequelize, Sequelize);
db.zone = require("./zone.model.js")(sequelize, Sequelize);
db.classroom = require("./classroom.model.js")(sequelize, Sequelize);
db.zone_record = require("./zone_record.model.js")(sequelize, Sequelize);


// db.user.hasMany(db.preference);
// db.preference.belongsTo(db.user);

module.exports = db;
