const requireLogin = require("../utils/loginRequired");
const mongoose = require("mongoose");
const Questions = mongoose.model("question");

module.exports = (app) => {
  app.get("/api/review", requireLogin, async (req, res) => {
    const questions = await Questions.find({});
    res.send(questions);
  });
  app.post("/api/review", async (req, res) => {
    for (let [name, value] of Object.entries(req.body)) {
      await Questions.findOneAndUpdate(
        { description: name },
        { rating: value },
        {
          new: true,
          upsert: true,
        }
      );
    }
    res.send("Review Submitted");
  });
};
