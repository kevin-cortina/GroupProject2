const Sequelize = require('sequelize');
require('dotenv').config();
let sequelize
// Create a connection object
if (process.env.JAWSDB_URL) {
  sequelize = new Sequelize(
    process.env.JAWSDB_URL,
  {
    username: 'h26fzvipzs9lyvhs',
    password: 'atrwaxjx0howziwn',
    database: 'qo0z1hrj5ejlsrbw',
    host: 'ro2padgkirvcf55m.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
    dialect: 'mysql'
  })
} else {
  sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
      host: 'localhost',
      dialect: 'mysql',
      port: 3306,
    }
  )
};

module.exports = sequelize;
