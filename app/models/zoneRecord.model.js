module.exports = (sequelize, Sequelize) => {
    const ZoneRecord = sequelize.define("zonerecord", {
        zoneRec_id: {
            primaryKey: true,
            autoIncrement: true,
            type: Sequelize.INTEGER
        },
       zone_id: {
            type: Sequelize.INTEGER
        },
        user_pref_id: {
             type: Sequelize.INTEGER
         },
         zone_id: {
              type: Sequelize.INTEGER
          }
        
    
    });

    return ZoneRecord;
};
