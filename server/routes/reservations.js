var express = require("express");
var router = express.Router();
const db = require("../models");

router.post("/category", async function (req, res) {
  try {
    ['startDate', 'endDate', 'category'].forEach(key => {
      if (!req.body[key]) {
        throw new Error(`${key} is not provided`);
      }
    });
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
    res.json({
      status: 200,
      data: result[0][0].count,
    });
  } catch (err) {
    res.send(err.message).status(400);
  }
});

module.exports = router;
