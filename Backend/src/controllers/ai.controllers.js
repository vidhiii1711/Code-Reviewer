const aiservice = require("../services/ai.server");
module.exports.getReview = async (req, res) => {
  const code = req.body.code;

  if (!code) {
    return res.status(400).send("code is required");
  }
  const prompt = `Please review the following code. Detect the programming language automatically and give a full structured review:\n\n${code}`;
  const response = await aiservice(prompt);
  console.log("AI Response:", response);
  res.json({ review: response })
};
