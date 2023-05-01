const { DataTypes} = require('sequelize');
const sequelize = require('../../database');

const ManoeuvreDepannageForm = sequelize.define('ManoeuvreDepannageForm', {
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
    tableName: 'manoeuvreDepannageForm', // Précisez explicitement le nom de la table
    timestamps: false // désactiver les champs createdAt et updatedAt
});
module.exports = ManoeuvreDepannageForm;
