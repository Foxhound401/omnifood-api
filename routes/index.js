var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Bap websites, today we create a cloud service for noob' });
});

module.exports = router;
