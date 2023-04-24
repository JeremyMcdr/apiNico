const { DataTypes } = require('sequelize');
const sequelize = require('../database');

const Entreprise = sequelize.define('Entreprise', {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true
    },
    nom: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    localisation: {
        type: DataTypes.STRING,
        allowNull: false,
    },
}, {
    tableName: 'entreprise', // Précisez explicitement le nom de la table
    timestamps: false // désactiver les champs createdAt et updatedAt
});

module.exports = Entreprise;
