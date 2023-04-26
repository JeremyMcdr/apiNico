const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('jeremymcdr_doormonitor', '286599', 'azertyuqsdfghjn,kjhgv n,lm84513ih675E', {
    host: 'mysql-jeremymcdr.alwaysdata.net',
    dialect: 'mysql',
});

module.exports = sequelize;
