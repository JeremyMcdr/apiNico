const { DataTypes} = require('sequelize');
const sequelize = require('../../database');

const TablierForm = sequelize.define('TablierForm', {
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
    tableName: 'tablierForm', // Précisez explicitement le nom de la table
    timestamps: false // désactiver les champs createdAt et updatedAt
});
module.exports = TablierForm;
