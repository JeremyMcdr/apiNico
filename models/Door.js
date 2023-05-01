const { DataTypes } = require('sequelize');
const sequelize = require('../database');
const Entreprise = require('./Entreprise')

const Door = sequelize.define('Door', {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true
    },
    reference: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    designation: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    repereInstallation: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    constructeur: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    salleNumero: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    anneeMiseService: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    hauteur: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    largeur: {
        type: DataTypes.STRING,
        allowNull: false,
    },
}, {
    tableName: 'portes', // Précisez explicitement le nom de la table
    timestamps: false // désactiver les champs createdAt et updatedAt
});
Door.belongsTo(Entreprise, { foreignKey: 'idEntreprise' });
module.exports = Door;
