const { DataTypes } = require('sequelize');
const sequelize = require('../database');

const Users = sequelize.define('User', {
    firstName: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    lastName: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
    },

}, {
    tableName: 'user', // Précisez explicitement le nom de la table
    timestamps: false // désactiver les champs createdAt et updatedAt
});

module.exports = Users;
