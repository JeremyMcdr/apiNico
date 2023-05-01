const { DataTypes} = require('sequelize');
const sequelize = require('../../database');

const ManoeuvreSecoursForm = sequelize.define('ManoeuvreSecoursForm', {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true
    },
    principe: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    affichage: {
        type: DataTypes.STRING,
        allowNull: false,
    },
}, {
    tableName: 'manoeuvreSecoursForm', // Précisez explicitement le nom de la table
    timestamps: false // désactiver les champs createdAt et updatedAt
});
module.exports = ManoeuvreSecoursForm;
