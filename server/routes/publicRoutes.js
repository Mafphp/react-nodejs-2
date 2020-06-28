const express = require("express");
const jsonwebtoken = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const jwtSecret = '12345';
const router = express.Router();
const db = require('../models/index');

const expireTime = 300; //seconds
const authErrorObj = { errors: [{  'param': 'Server', 'msg': 'Authorization error' }] };

// Authentication endpoint
router.post('/login', async (req, res) => {
  try {
    let user = await db.user.findOne({ where: { username: req.body.username } });
    if (!user) {
      return res.status(404).send({
        errors: [{ 'param': 'Server', 'msg': 'Invalid e-mail' }] 
      });
    }
    const validPassword = await bcrypt.compare(req.body.password, user.password);
    if (!validPassword) {
      return res.status(401).send({
        errors: [{ 'param': 'Server', 'msg': 'Wrong password' }] 
      });
    }
    //AUTHENTICATION SUCCESS
    const token = jsonwebtoken.sign({ user: user.id, username: user.username }, jwtSecret, {expiresIn: expireTime});
    res.cookie('token', token, { httpOnly: true, sameSite: true, maxAge: 1000 * expireTime });
    res.json({id: user.id, name: user.name});
  } catch (error) {
    res.status(401).json(authErrorObj)
  }
});
router.post('/logout', (req, res) => {
  res.clearCookie('token').end();
});
router.get("/vehicles", async function (req, res) {
  const result = await db.vehicles.findAll();
  res.json({
    status: 200,
    data: result,
  });
});


module.exports = router;
