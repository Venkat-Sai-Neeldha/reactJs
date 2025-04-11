const { Sequelize, DataTypes } = require('sequelize');
const databaseConfig = require('../config/config');

const sequelize = new Sequelize(databaseConfig.database, databaseConfig.username, databaseConfig.password, {
    dialect: databaseConfig.dialect,
    logging: false, 
  });

const User = sequelize.define('User', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,  
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
  tableName: 'table_user', 
  timestamps: false, 

});

module.exports = User;
