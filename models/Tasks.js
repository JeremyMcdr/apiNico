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
        allowNull: false,
    },
    description: {
        type: DataTypes.TEXT,
        allowNull: true,
    },
    userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        field: 'idUser', // Le nom de la colonne dans la base de données
    },
    createdAt: {
        type: DataTypes.DATE,
        field: 'created_at', // Le nom de la colonne dans la base de données
    },
    updatedAt: {
        type: DataTypes.DATE,
        field: 'updated_at', // Le nom de la colonne dans la base de données
    },
});

// Définir les associations entre User et Task
Tasks.belongsTo(User); // Une tâche appartient à un utilisateur (relation Many-to-One)

module.exports = Tasks;
