// TODO 11: Implement POST route to save Emails
const models = require('../models');

// TODO 3: Landing page controller
exports.get_landing = function (req, res, next) {
  res.render('landing', {
    title: 'Express'
  });
}

// TODO 6: Landing page form controller
exports.submit_lead = function (req, res, next) {
  // console.log("lead email:", req.body.lead_email);
  return models.Lead.create({
    email: req.body.lead_email
  }).then(lead => {
    res.redirect('/');
  })
}