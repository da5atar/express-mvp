var express = require('express');
var router = express.Router();

let landing = require('../controllers/landing');

/* GET home page. */
// TODO 2: landing page route handler
router.get('/', landing.get_landing);

// TODO 5: Develop first POST route for leads submissions
router.post('/', landing.submit_lead);

module.exports = router;