"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "user",
      [
        {
          username: "admin",
          password:
            "$2b$10$BuzTq5zcBR77Non7XTEo6eD5.Nee214NAOVf7NUA6FUnkNJF3CKmu",
          createdAt: new Date().toDateString(),
          updatedAt: new Date().toDateString(),
        },
        {
          username: "alireza",
          password:
            "$2b$10$BuzTq5zcBR77Non7XTEo6eD5.Nee214NAOVf7NUA6FUnkNJF3CKmu",
          createdAt: new Date().toDateString(),
          updatedAt: new Date().toDateString(),
        },
        {
          username: "mosi",
          password:
            "$2b$10$BuzTq5zcBR77Non7XTEo6eD5.Nee214NAOVf7NUA6FUnkNJF3CKmu",
          createdAt: new Date().toDateString(),
          updatedAt: new Date().toDateString(),
        },
        {
          username: "farhad",
          password:
            "$2b$10$BuzTq5zcBR77Non7XTEo6eD5.Nee214NAOVf7NUA6FUnkNJF3CKmu",
          createdAt: new Date().toDateString(),
          updatedAt: new Date().toDateString(),
        },
        {
          username: "amir",
          password:
            "$2b$10$BuzTq5zcBR77Non7XTEo6eD5.Nee214NAOVf7NUA6FUnkNJF3CKmu",
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
