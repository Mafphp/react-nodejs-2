var express = require('express');
var router = express.Router();
const db = require('../models');


/* GET users listing. */
router.get('/', async function(req, res) {
  const result = await db.user.findAll()
  console.log('exit');
  res.json({
    status: 200,
    data: result
  });
});

router.post('/create', async function(req, res) {
  console.log(req.body);
  console.log('exit');
  await db.user.create(req.body);
  res.send('user create successfully')
  // const result = await db.user.findAll()
  // console.log('exit');
  // res.json({
  //   status: 200,
  //   data: result
  // });
});




module.exports = router;
