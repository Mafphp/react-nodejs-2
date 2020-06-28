var express = require("express");
var router = express.Router();
const db = require("../models");
const { QueryTypes } = require("sequelize");

const { sequelize } = require("../models");

router.get("/username/history", async function (req, res) {
  const result = await db.reservations.findAll({
    where: { status: false },
  });
  // console.log(result);
  // console.log("exit");
  let a = res.json({
    status: 200,
    data: result,
  });
});

router.post("/category", async function (req, res) {
  console.log("-0------");
  let result = await db.sequelize.query(
    `
  select count(*) as count from reservations 
  where startDate between $startDate and $endDate
  and category = $category`,
    {
      bind: {
        startDate: req.body.startDate,
        endDate: req.body.endDate,
        category: req.body.category,
      },
    }
  );
  console.log(result[0][0].count);
  res.json({
    status: 200,
    data: result[0][0].count,
  });
});

module.exports = router;
