"use strict";

//restricting what a user and what admin can access
module.exports = function (req, res, ok) {

  let sessionUserMatchesId = (req.session.User.id === req.params['id']);
  let isAdmin = req.session.User.admin;
  if (!(sessionUserMatchesId || isAdmin)) {
    let requireAdminError = {name: 'requireAdminError', message: 'You must be an admin'};
    req.session.flash = {
      err: requireAdminError
    }
    res.redirect('/session/new');
    return;
  }
  ok();
}
