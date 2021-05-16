module.exports = (sequelize, Sequelize) => {
    const Zone_record = sequelize.define("zone_record", {
        zone_record_id: {
            primaryKey: true,
            autoIncrement: true,
            type: Sequelize.INTEGER
        },

        user_id: {
            type: Sequelize.INTEGER
        },
        
        user_pref_id: {
            type: Sequelize.INTEGER
        },
        zone_id: {
            type: Sequelize.INTEGER
        }
    });

    return Zone_record;
};
