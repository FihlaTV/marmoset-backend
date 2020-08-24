'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Stream extends Model {

    static associate(models) {
    }
  };
  Stream.init({
    name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Stream',
  }, {
    tableName: 'streams'
  });
  return Stream;
};