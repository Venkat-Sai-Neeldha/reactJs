const { Sequelize } = require('sequelize');
 
// Initialize Sequelize for PostgreSQL
const sequelize = new Sequelize('postgres://postgres:postgres@localhost:5432/supporttickets', {
  dialect: 'postgres',
  logging: false, // Set to true for logging SQL queries
});
 
async function testConnection() {
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
}
 
testConnection();
 
module.exports = sequelize;