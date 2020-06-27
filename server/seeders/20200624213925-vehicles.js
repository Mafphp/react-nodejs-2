"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "vehicles",
      [
        {
          category: "A",
          brand: "BMW",
          model: "I7",
          price: "80",
          createdAt: new Date().toDateString(),
          updatedAt: new Date().toDateString(),
        },
        {
          category: "B",
          brand: "BMW",
          model: "I8",
          price: "70",
          createdAt: new Date().toDateString(),
          updatedAt: new Date().toDateString(),
        },
        {
          category: "C",
          brand: "BMW",
          model: "Z4",
          price: "60",
          createdAt: new Date().toDateString(),
          updatedAt: new Date().toDateString(),
        },
        {
          category: "D",
          brand: "admin",
          model: "admin",
          price: "50",
          createdAt: new Date().toDateString(),
          updatedAt: new Date().toDateString(),
        },
        {
          category: "E",
          brand: "BMW",
          model: "720",
          price: "40",
          createdAt: new Date().toDateString(),
          updatedAt: new Date().toDateString(),
        },
        {
          category: "A",
          brand: "BENZ",
          model: "S500",
          price: "80",
          createdAt: new Date().toDateString(),
          updatedAt: new Date().toDateString(),
        },
        {
          category: "B",
          brand: "BENZ",
          model: "S400",
          price: "70",
          createdAt: new Date().toDateString(),
          updatedAt: new Date().toDateString(),
        },
        {
          category: "C",
          brand: "BENZ",
          model: "S300",
          price: "60",
          createdAt: new Date().toDateString(),
          updatedAt: new Date().toDateString(),
        },
        {
          category: "D",
          brand: "BENZ",
          model: "S200",
          price: "50",
          createdAt: new Date().toDateString(),
          updatedAt: new Date().toDateString(),
        },
        {
          category: "E",
          brand: "BENZ",
          model: "S100",
          price: "40",
          createdAt: new Date().toDateString(),
          updatedAt: new Date().toDateString(),
        },
        {
          category: "A",
          brand: "AUDI",
          model: "TT",
          price: "80",
          createdAt: new Date().toDateString(),
          updatedAt: new Date().toDateString(),
        },
        {
          category: "B",
          brand: "AUDI",
          model: "T7",
          price: "70",
          createdAt: new Date().toDateString(),
          updatedAt: new Date().toDateString(),
        },
        {
          category: "C",
          brand: "AUDI",
          model: "T6",
          price: "60",
          createdAt: new Date().toDateString(),
          updatedAt: new Date().toDateString(),
        },
        {
          category: "D",
          brand: "AUDI",
          model: "T5",
          price: "50",
          createdAt: new Date().toDateString(),
          updatedAt: new Date().toDateString(),
        },
        {
          category: "E",
          brand: "AUDI",
          model: "T4",
          price: "40",
          createdAt: new Date().toDateString(),
          updatedAt: new Date().toDateString(),
        },
        {
          category: "A",
          brand: "ALFA",
          model: "I55",
          price: "80",
          createdAt: new Date().toDateString(),
          updatedAt: new Date().toDateString(),
        },
        {
          category: "B",
          brand: "ALFA",
          model: "I45",
          price: "70",
          createdAt: new Date().toDateString(),
          updatedAt: new Date().toDateString(),
        },
        {
          category: "C",
          brand: "ALFA",
          model: "I35",
          price: "60",
          createdAt: new Date().toDateString(),
          updatedAt: new Date().toDateString(),
        },
        {
          category: "D",
          brand: "ALFA",
          model: "I25",
          price: "50",
          createdAt: new Date().toDateString(),
          updatedAt: new Date().toDateString(),
        },
        {
          category: "E",
          brand: "ALFA",
          model: "I15",
          price: "40",
          createdAt: new Date().toDateString(),
          updatedAt: new Date().toDateString(),
        },
        {
          category: "A",
          brand: "TOYOTA",
          model: "A1",
          price: "80",
          createdAt: new Date().toDateString(),
          updatedAt: new Date().toDateString(),
        },
        {
          category: "B",
          brand: "TOYOTA",
          model: "A2",
          price: "70",
          createdAt: new Date().toDateString(),
          updatedAt: new Date().toDateString(),
        },
        {
          category: "C",
          brand: "TOYOTA",
          model: "A3",
          price: "60",
          createdAt: new Date().toDateString(),
          updatedAt: new Date().toDateString(),
        },
        {
          category: "D",
          brand: "TOYOTA",
          model: "A4",
          price: "50",
          createdAt: new Date().toDateString(),
          updatedAt: new Date().toDateString(),
        },
        {
          category: "E",
          brand: "TOYOTA",
          model: "A5",
          price: "40",
          createdAt: new Date().toDateString(),
          updatedAt: new Date().toDateString(),
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("vehicles", null, {});
  },
};