var express = require("express");
var router = express.Router();
const db = require("../models");
const { QueryTypes } = require("sequelize");

const { sequelize } = require("../models");
/* GET vehicles listing. */

router.get("/", async function (req, res) {
  const result = await db.vehicles.findAll();
  res.json({
    status: 200,
    data: result,
  });
});
router.get("/category", async function (req, res) {
  const result = await sequelize.query(
    `SELECT distinct category from vehicles`,
    {
      type: QueryTypes.SELECT,
    }
  );
  res.json({
    status: 200,
    data: result,
  });
});

router.post("/category", async function (req, res) {
  let price = await db.vehicles.findOne({
    attributes: ["price"],
    where: { category: req.body.category },
  });
  onePrice = price.dataValues;
  console.log(onePrice);
  console.log(req.body);
  console.log("exit");
  let a = res.json({
    status: 200,
    data: onePrice,
  });
});
router.post("/category/total", async function (req, res) {
  let total = await db.vehicles.findAndCountAll({
    where: { category: req.body.category },
  });

  console.log(total.count);
  oneTotal = total.count;
  let a = res.json({
    status: 200,
    data: oneTotal,
  });
});

module.exports = router;
