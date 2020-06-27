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
  console.log(result);
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
  console.log(req.body);
  console.log("exit");
  res.json({
    status: 200,
    data: price,
  });
  // await db.user.create(req.body);
  // res.send("user create successfully");
  // const result = await db.user.findAll()
  // console.log('exit');
  // res.json({
  //   status: 200,
  //   data: result
  // });
});

module.exports = router;
