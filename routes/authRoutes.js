const passport = require('passport');

module.exports = app => {
  app.get('/auth/google',
    passport.authenticate('google', {
      scope: ['profile', 'email']
    })
  );
  app.get('/auth/google/callback',
    passport.authenticate('google'),
    (req, res) => {
      // Project Admin would redirect to audit page
      // res.redirect('/audit');
      // Reviewers would redirected to review page
      res.redirect('/review');
    }
  );

  app.get('/api/logout', (req, res) => {
    req.logout();
    res.redirect('/');
  })

  app.get('/api/current_user', (req, res) => {
    res.send(req.user);
  });
};