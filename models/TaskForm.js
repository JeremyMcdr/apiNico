const { DataTypes } = require('sequelize');
const sequelize = require('../database');

const TaskForm = sequelize.define('TaskForm', {
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
    formJSON: {
        type: DataTypes.JSON,
        allowNull: false,
    },
}, {
    tableName: 'taskforms', // Précisez explicitement le nom de la table
    timestamps: false // désactiver les champs createdAt et updatedAt
});

module.exports = TaskForm;
