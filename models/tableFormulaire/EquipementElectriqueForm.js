const { DataTypes} = require('sequelize');
const sequelize = require('../../database');

const EquipementElectriqueForm = sequelize.define('EquipementElectriqueForm', {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true
    },
    protection: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    miseATerre: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    dispositifCoupure: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    dispositifArret: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    systemeCommande: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    etat: {
        type: DataTypes.STRING,
        allowNull: false,
    },
}, {
    tableName: 'equipementElectriqueForm', // Précisez explicitement le nom de la table
    timestamps: false // désactiver les champs createdAt et updatedAt
});
module.exports = EquipementElectriqueForm;
