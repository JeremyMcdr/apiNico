const { DataTypes} = require('sequelize');
const sequelize = require('../../database');

const OrganeForm = sequelize.define('OrganeForm', {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true
    },
    type: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    etat: {
        type: DataTypes.STRING,
        allowNull: false,
    },
}, {
    tableName: 'organeForm', // Précisez explicitement le nom de la table
    timestamps: false // désactiver les champs createdAt et updatedAt
});
module.exports = OrganeForm;
