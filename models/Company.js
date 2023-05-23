const { DataTypes } = require('sequelize');
const sequelize = require('../database');

const Company = sequelize.define('company', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    location: {
        type: DataTypes.STRING,
        allowNull: false,
    },
}, {
    tableName: 'company', // Précisez explicitement le nom de la table
    timestamps: false // désactiver les champs createdAt et updatedAt
});

module.exports = Company;
