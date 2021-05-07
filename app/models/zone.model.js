module.exports = (sequelize, Sequelize) => {
    const Zone = sequelize.define("zone", {
        zone_id: {
            primaryKey: true,
            autoIncrement: true,
            type: Sequelize.INTEGER
        },
        class_id:{
            type: Sequelize.INTEGER
        },
        description: {
            type: Sequelize.STRING
        },
    });

    return Zone;
};
