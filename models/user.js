'use strict'
const { Model } = require('sequelize')

module.exports = (sequelize, DataTypes) => {
  class User extends Model {

    static associate(models) {
      User.hasOne(models.Stream)
    }
  }

  User.init({
    name: DataTypes.STRING,
    allowNull: false,
  }, {
    sequelize,
    modelName: 'User',
  }, {
    tableName: 'users'
  });
  return User;
};