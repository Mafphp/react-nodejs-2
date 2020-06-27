"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "reservations",
      [
        {
          startDate: "2020/06/27",
          endDate: "2020/06/30",
          username: "alireza",
          category: "A",
          createdAt: new Date().toDateString(),
          updatedAt: new Date().toDateString(),
        },
        {
          startDate: "2020/06/27",
          endDate: "2020/06/30",
          username: "amir",
          category: "B",
          createdAt: new Date().toDateString(),
          updatedAt: new Date().toDateString(),
        },
        {
          startDate: "2020/07/3",
          endDate: "2020/06/7",
          username: "farhad",
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
