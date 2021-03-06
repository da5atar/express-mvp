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

// TODO 14: editing leads
// CRUD: editing individual lead routes
router.get('/lead/:lead_id/edit', landing.show_edit_lead);
router.post('/lead/:lead_id/edit', landing.edit_lead);

// TODO 15: deleting leads
// CRUD: deleting individual lead route
router.post('/lead/:lead_id/delete', landing.delete_lead);

// TODO 16: Implement deleting lead using client side javascript
router.post('/lead/:lead_id/delete-json', landing.delete_lead_json);

module.exports = router;