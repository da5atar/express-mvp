var express = require('express');
var router = express.Router();

let landing = require('../controllers/landing');

/* GET home page. */
// TODO 2: landing page route handler
router.get('/', landing.get_landing);

module.exports = router;