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
router.post("/", async function (req, res) {
  // console.log("body", req.body);
  console.log("cookie", req.cookies);
  let user = await db.user.findOne({ where: { username: req.body.username } });
  if (!user) return res.status(400).send("Invalid email or password.");
  const validPassword = await bcrypt.compare(req.body.password, user.password);
  if (!validPassword) return res.status(400).send("Invalid email or password.");

  const token = jwt.sign({ username: user.username }, "12345");
  res.cookie("token", token);
  res.json({
    token,
    status: 200,
  });
});

router.post("/create", async function (req, res) {
  console.log(req.body);
  console.log("exit");
  await db.user.create(req.body);
  res.send("user create successfully");
  // const result = await db.user.findAll()
  // console.log('exit');
  // res.json({
  //   status: 200,
  //   data: result
  // });
});

module.exports = router;
