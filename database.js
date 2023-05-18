const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('jeremymcdr_doormonitor', '286599', '123456789azertyuiop!', {
    host: 'mysql-jeremymcdr.alwaysdata.net',
    dialect: 'mysql',
});

// Changement temporariare de la base de donnée
/*

const sequelize = new Sequelize('nicoApplication', 'root', '', {
    host: 'localhost',
    dialect: 'mysql',
});
*/

module.exports = sequelize;
