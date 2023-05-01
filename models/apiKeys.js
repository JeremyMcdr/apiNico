const { DataTypes } = require('sequelize');
const sequelize = require('../database');
const User = require('./User')


const apiKeys = sequelize.define('apiKeys', {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true
    },
    key: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    isActive: {
        type: DataTypes.STRING,
        allowNull: false,
    },
}, {
    tableName: 'apiKeys', // Précisez explicitement le nom de la table
    timestamps: false // désactiver les champs createdAt et updatedAt
})
apiKeys.belongsTo(User, {foreignKey:'userId'});
module.exports = apiKeys;
