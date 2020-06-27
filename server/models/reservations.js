"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class reservations extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  reservations.init(
    {
      start_date: DataTypes.DATE,
      end_date: DataTypes.DATE,
      username: DataTypes.STRING,
      category: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "reservations",
    }
  );
  return reservations;
};
