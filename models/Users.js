const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
const heroku = require("dt3bgg3gu6nqye5f.cbetxkdyhwsb.us-east-1.rds.amazonaws.com")
const bcrypt = require('bcrypt');

// Create a new Sequelize model for books
class Users extends Model {
  checkPassword(loginPw) {
    return bcrypt.compareSync(loginPw, this.password);
  }
}

Users.init(
  // An `id` is automatically created by Sequelize, though best practice would be to define the primary key ourselves
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    username: {
      type: DataTypes.STRING
    },
    password: {
      type: DataTypes.STRING
    },
    bio: {
      type: DataTypes.STRING
    },
    favorites: {
      type: DataTypes.STRING
    }
  },
  {
    // Link to database connection
    sequelize,
    heroku,
    // Set to false to remove `created_at` and `updated_at` fields
    timestamps: false,
    underscored: true,
    modelName: 'users'
  }
);

module.exports = Users;
