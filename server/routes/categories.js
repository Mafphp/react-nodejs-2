var express = require('express');
var router = express.Router();

/* GET users listing. */
router.post('/', function(req, res, next) {
  res.send('aaaaa with a resource');
});

module.exports = router;
