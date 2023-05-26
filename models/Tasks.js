const { DataTypes } = require('sequelize');
const sequelize = require('../database');
const User = require('./User'); // Importer le modèle User si nécessaire

const Tasks = sequelize.define('tasks', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    title: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    description: {
        type: DataTypes.TEXT,
        allowNull: true,
    },
    userId: {
        type: DataTypes.INTEGER,
        allowNull: true,
    },
    companyId: {
        type: DataTypes.INTEGER,
        allowNull: true,
    },
    startDate: {
        type: DataTypes.DATE,
        allowNull: true,
        },
    endDate: {
        type: DataTypes.DATE,
        allowNull: true,
        },
    },
{
    timestamps: false // désactiver les champs createdAt et updatedAt
    });

// Définir les associations entre User et Task
Tasks.belongsTo(User); // Une tâche appartient à un utilisateur (relation Many-to-One)

module.exports = Tasks;
