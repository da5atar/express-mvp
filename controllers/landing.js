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
    res.redirect('/leads');
  });
}

// CRUD: listing of leads (controller)
exports.show_leads = function (req, res, next) {
  // fetch leads from DB
  return models.Lead.findAll().then(leads => {
    res.render('landing', {
      title: 'Express',
      leads: leads // returned leads object from promise
    });
  });
}

// CRUD: listing of lead details
exports.show_lead = function (req, res, next) {
  // fetch lead with a given ID from DB
  return models.Lead.findOne({
    where: {
      id: req.params.lead_id
    }
  }).then(lead => {
    res.render('lead', {
      lead: lead
    });
  });
}

// CRUD: editing individual lead
exports.show_edit_lead = function (req, res, next) {
  return models.Lead.findOne({
    where: {
      id: req.params.lead_id
    }
  }).then(lead => {
    res.render('lead/edit_lead', {
      lead: lead
    });
  });
}

exports.edit_lead = function (req, res, next) {
  return models.Lead.update({
    email: req.body.lead_email
  }, {
    where: {
      id: req.params.lead_id
    }
  }).then(result => {
    res.redirect('/lead/' + req.params.lead_id);
  });
}

// CRUD: deleting individual lead route

exports.delete_lead = function (req, res, next) {
  return models.Lead.destroy({
    where: {
      id: req.params.lead_id
    }
  }).then(result => {
    res.redirect('/leads');
  });
}