var express = require("express");
var router = express.Router();
const db = require("../models");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
/* GET users listing. */
router.get("/", async function (req, res) {
  const result = await db.user.findAll();
  console.log("exit");
  res.json({
    status: 200,
    data: result,
  });
});
router.post("/login", async function (req, res) {
  let user = await db.user.findOne({ where: { username: req.body.username } });
  if (!user) return res.status(400).send("Invalid email or password.");
  const validPassword = await bcrypt.compare(req.body.password, user.password);
  if (!validPassword) return res.status(400).send("Invalid email or password.");
  const token = jwt.sign({ user }, "12345");
  req.session.user = user;
  res.json({
    token,
  });
});

router.post("/create", async function (req, res) {
  await db.user.create(req.body);
  res.send("user create successfully");
});

module.exports = router;
