const { DataTypes } = require('sequelize');
const sequelize = require('../database');

const Form = sequelize.define('Form', {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },
    taskId: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false,
    },
}, {
    tableName: 'forms',
    timestamps: false
});

module.exports = Form;
