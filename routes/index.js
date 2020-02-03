var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/ping', function(req, res, next) {
  res.status(200).json('Server funcionando');
});

module.exports = router;
