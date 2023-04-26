const { DataTypes, ForeignKeyConstraintError} = require('sequelize');
const sequelize = require('../database');

const Formulaire = sequelize.define('Formulaire', {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true
    },
    structure: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    organe: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    tablier: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    mecanisme: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    dispositifArret: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    dispositifSecurite: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    manoeuvreDepanage: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    signalisation: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    equipement: {
        type: DataTypes.STRING,
        allowNull: false,
    },
}, {
    tableName: 'VerificationPorte', // Précisez explicitement le nom de la table
    timestamps: false // désactiver les champs createdAt et updatedAt
});
module.exports = Formulaire;
