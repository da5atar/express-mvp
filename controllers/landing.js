// TODO 3: Landing page controller
exports.get_landing = function (req, res, next) {
  res.render('landing', {
    title: 'Express'
  });
}