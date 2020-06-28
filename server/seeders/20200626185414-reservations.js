"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "reservations",
      [
        {
          startDate: new Date("2020/06/27"),
          endDate: new Date("2020/06/30"),
          username: "alireza",
          category: "A",
          status: false,
          createdAt: new Date().toDateString(),
          updatedAt: new Date().toDateString(),
        },
        {
          startDate: new Date('2020/06/27'),
          endDate: new Date('2020/06/30'),
          username: "amir",
          category: "B",
          status: false,
          createdAt: new Date().toDateString(),
          updatedAt: new Date().toDateString(),
        },
        {
          startDate: new Date("2020/07/3"),
          endDate: new Date("2020/06/7"),
          username: "farhad",
          category: "A",
          status: true,
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
