const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('jeremymcdr_doormonitor', '286599', '258046722801Jm!', {
    host: 'mysql-jeremymcdr.alwaysdata.net',
    dialect: 'mysql',
});

module.exports = sequelize;
