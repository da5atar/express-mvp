var express = require('express');
var router = express.Router();

let landing = require('../controllers/landing');

/* GET home page. */
// TODO 2: landing page route handler
router.get('/', landing.get_landing);

// TODO 5: Develop first POST route for leads submissions
router.post('/', landing.submit_lead);
// TODO 12: Implement CRUD pattern on leads (listing, editing, updating and deleting)

// CRUD: listing of leads route
router.get('/leads', landing.show_leads);

// CRUD: listing details of leads
router.get('/lead/:lead_id', landing.show_lead);

module.exports = router;