const Sequelize = require('sequelize');
require('dotenv').config();
let sequelize
// Create a connection object
if (process.env.JAWSDB_URL) {
  sequelize = new Sequelize(
    process.env.JAWSDB_URL,
  {
    username: 'b1m7tki70au8qnvy',
    password: 'h0dhvngvy56rwkkd',
    database: 'axg0js0lfs2gwq4q',
    host: '	w3epjhex7h2ccjxx.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
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
