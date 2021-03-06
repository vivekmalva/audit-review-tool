const requireLogin = require("../utils/loginRequired");
const mongoose = require("mongoose");
const Questions = mongoose.model("question");

module.exports = (app) => {
  app.get("/api/audit", requireLogin, async (req, res) => {
    const questions = await Questions.find({});
    res.send(questions);
  });
  app.post("/api/audit", async (req, res) => {
    for (let [name, value] of Object.entries(req.body)) {
      let data = await Questions.findOneAndUpdate(
        { description: name },
        { response: value },
        {
          new: true,
          upsert: true,
        }
      );
    }
    res.send("Your Responses are Submitted");
  });
};
