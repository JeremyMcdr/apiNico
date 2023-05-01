const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../database');

const FormData = sequelize.define('FormData', {
    structure: {
        type: DataTypes.JSON,
    },
    tablier: {
        type: DataTypes.JSON,
    },
    securite: {
        type: DataTypes.JSON,
    },
});

module.exports = FormData;
