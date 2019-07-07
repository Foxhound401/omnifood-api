var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Troll friend and learn cloud at the same time, why not ?' });
});

module.exports = router;
