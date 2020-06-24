"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "user",
      [
        {
          username: "admin",
          password: "123",
          createdAt: new Date().toDateString(),
          updatedAt: new Date().toDateString(),
        },
        {
          username: "alireza",
          password: "123",
          createdAt: new Date().toDateString(),
          updatedAt: new Date().toDateString(),
        },
        {
          username: "mosi",
          password: "123",
          createdAt: new Date().toDateString(),
          updatedAt: new Date().toDateString(),
        },
        {
          username: "farhad",
          password: "123",
          createdAt: new Date().toDateString(),
          updatedAt: new Date().toDateString(),
        },
        {
          username: "amir",
          password: "123",
          createdAt: new Date().toDateString(),
          updatedAt: new Date().toDateString(),
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("user", null, {});
  },
};
