const { DataTypes} = require('sequelize');
const sequelize = require('../../database');

const MecanismeForm = sequelize.define('MecanismeForm', {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true
    },
    etat: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    fonctionnement: {
        type: DataTypes.STRING,
        allowNull: false,
    },
}, {
    tableName: 'mecanismeForm', // Précisez explicitement le nom de la table
    timestamps: false // désactiver les champs createdAt et updatedAt
});
module.exports = MecanismeForm;
