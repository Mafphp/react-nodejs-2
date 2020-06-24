"use strict";
module.exports = (sequelize, DataTypes) => {
  const vehicle = sequelize.define(
    "vehicles",
    {
      brand: DataTypes.STRING,
      model: DataTypes.STRING,
      category: DataTypes.STRING,
      price: DataTypes.INTEGER,
    },
    { timestamps: true }
  );
};
return vehicles;
