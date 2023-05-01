const { DataTypes} = require('sequelize');
const sequelize = require('../../database');

const SignalisationForm = sequelize.define('SignalisationForm', {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true
    },
    volumeDebattementPorte: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    marquage: {
        type: DataTypes.STRING,
        allowNull: false,
    },
}, {
    tableName: 'signalisationForm', // Précisez explicitement le nom de la table
    timestamps: false // désactiver les champs createdAt et updatedAt
});
module.exports = SignalisationForm;
