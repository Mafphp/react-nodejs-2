var express = require("express");
var router = express.Router();
var moment = require("moment");
const db = require("../models");
const { QueryTypes } = require("sequelize");

const { sequelize } = require("../models");
const { UnavailableForLegalReasons } = require("http-errors");

router.post("/book", async (req, res) => {
  const username = "admin";
  const { startDate, endDate, category } = req.body;
  const start_date = moment(startDate).format("YYYY/MM/DD");
  const end_date = moment(endDate).format("YYYY/MM/DD");
  await db.reservations.create({
    startDate: start_date,
    endDate: end_date,
    username: username,
    category: category,
    status: true,
  });
  res.json({
    status: 200,
  });
});

router.put("/updating", async (req, res) => {
  const date = moment(req.body.date).format("YYYY/MM/DD");
  await db.reservations.update(
    { status: false },
    { where: { [startDate.lt]: date } }
  );
  res.json({
    status: 200,
  });
});

router.get("/username/history", async function (req, res) {
  const result = await db.reservations.findAll({
    where: { status: false },
  });

  res.json({
    status: 200,
    data: result,
  });
});
router.get("/username/current", async function (req, res) {
  const result = await db.reservations.findAll({
    where: { status: true },
  });

  res.json({
    status: 200,
    data: result,
  });
});

router.post("/category", async function (req, res) {
  // console.log("-0------");
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
  // console.log(result[0][0].count);
  res.json({
    status: 200,
    data: result[0][0].count,
  });
});

module.exports = router;
