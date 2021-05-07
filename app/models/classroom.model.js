module.exports = (sequelize, Sequelize) => {
    const Classroom = sequelize.define("classroom", {
        class_id: {
            primaryKey: true,
            autoIncrement: true,
            type: Sequelize.INTEGER
        },
        classroomname: {
            type: Sequelize.STRING
        }
    });

    return Classroom;
};
