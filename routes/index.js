var express = require('express');
var router = express.Router();

let index = require('../controllers/index');

/* GET home page. */
// TODO 1: Separate the route handler logic
router.get('/', index.index);

module.exports = router;