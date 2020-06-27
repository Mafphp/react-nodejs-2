"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "reservations",
      [
        {
          start_date: "Fri Jun 26 2020",
          end_date: " ",
          username: "alireza",
          category: "A",
          createdAt: new Date().toDateString(),
          updatedAt: new Date().toDateString(),
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("reservations", null, {});
  },
};
