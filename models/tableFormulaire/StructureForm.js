const { DataTypes} = require('sequelize');
const sequelize = require('../../database');

const StructureForm = sequelize.define('StructureForm', {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true
    },
    organeFixation: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    elementGuidage: {
        type: DataTypes.STRING,
        allowNull: false,
    },
}, {
    tableName: 'structureForm', // Précisez explicitement le nom de la table
    timestamps: false // désactiver les champs createdAt et updatedAt
});
module.exports = StructureForm;
