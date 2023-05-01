const { DataTypes} = require('sequelize');
const sequelize = require('../../database');

const DispositifSecuriteForm = sequelize.define('DispositifSecuriteForm', {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true
    },
    protectionCoupure: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    protectionPresence: {
        type: DataTypes.STRING,
        allowNull: false,
    },
}, {
    tableName: 'dispositifSecuriteForm', // Précisez explicitement le nom de la table
    timestamps: false // désactiver les champs createdAt et updatedAt
});
module.exports = DispositifSecuriteForm;
