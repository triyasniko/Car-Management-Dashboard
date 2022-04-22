'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Car extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Car.init({
    plate: DataTypes.STRING,
    manufacture: DataTypes.STRING,
    image: DataTypes.STRING,
    capacity: DataTypes.NUMERIC,
    rentPerDay: DataTypes.NUMERIC
  }, {
    sequelize,
    modelName: 'Car',
  });
  return Car;
};