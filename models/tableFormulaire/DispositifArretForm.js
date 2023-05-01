const { DataTypes} = require('sequelize');
const sequelize = require('../../database');

const DispositifArretForm = sequelize.define('DispositifArretForm', {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true
    },
    fonctionnement: {
        type: DataTypes.STRING,
        allowNull: false,
    },
}, {
    tableName: 'dispositifArretForm', // Précisez explicitement le nom de la table
    timestamps: false // désactiver les champs createdAt et updatedAt
});
module.exports = DispositifArretForm;
