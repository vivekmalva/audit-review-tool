const requireLogin = require('../utils/loginRequired');
const mongoose = require('mongoose');
const Questions = mongoose.model('question');

module.exports = app=>{
    app.get('/api/audit', requireLogin, async (req, res) => {
      const questions = await Questions.find({});
      res.send(questions);
    });
};
