const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

// Create a new Sequelize model for books
class MovieIds extends Model {}

MovieIds.init(
  // An `id` is automatically created by Sequelize, though best practice would be to define the primary key ourselves
  {
    listId: {
      type: DataTypes.INTEGER
    },
    movieIds: {
      type: DataTypes.STRING
    }
  },
  {
    // Link to database connection
    sequelize,
    // Set to false to remove `created_at` and `updated_at` fields
    timestamps: false,
    underscored: true,
    modelName: 'MovieIds'
  }
);

module.exports = MovieIds;
