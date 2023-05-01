const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../database');

const FormData = sequelize.define('Formulaire_data', {
    structure: {
        type: DataTypes.JSON,
    },
    tablier: {
        type: DataTypes.JSON,
    },
    securite: {
        type: DataTypes.JSON,
    },

},
    {
        tableName: 'formulaire_data', // Précisez explicitement le nom de la table
    }
    );

module.exports = FormData;
