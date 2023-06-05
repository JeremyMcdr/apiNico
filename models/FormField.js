const { DataTypes } = require('sequelize');
const sequelize = require('../database');

const FormField = sequelize.define('FormField', {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },
    taskFormId: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    type: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    position: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
}, {
    tableName: 'formfields',
    timestamps: false
});

module.exports = FormField;
