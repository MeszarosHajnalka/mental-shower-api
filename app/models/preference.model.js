module.exports = (sequelize, Sequelize) => {
    const Preference = sequelize.define("preference", {
        id: {
            primaryKey: true,
            autoIncrement: true,
            type: Sequelize.INTEGER
        },
        user_id: {
            type: Sequelize.INTEGER,
            references: {
                model: 'users',
                key: 'id',
            }
        },
        name: {
            type: Sequelize.STRING
        },
        temperature: {
            type: Sequelize.INTEGER
        },
        humidity: {
            type: Sequelize.INTEGER
        },
        airspeed: {
            type: Sequelize.INTEGER
        },
    });

    return Preference;
};
