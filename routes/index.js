var express = require('express');
var router = express.Router();

/* GET home page. */
// TODO 1: Separate the route handler logic
router.get('/', function (req, res, next) {
  res.render('index', {
    title: 'Express'
  });
});

module.exports = router;