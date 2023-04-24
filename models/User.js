const { DataTypes } = require('sequelize');
const sequelize = require('../database');

const Users2 = sequelize.define('Users2', {
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
    tableName: 'users2', // Précisez explicitement le nom de la table
});

module.exports = Users2;
