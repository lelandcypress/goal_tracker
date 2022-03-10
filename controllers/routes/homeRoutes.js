const path = require("path");
const Goals = require("../../models/Goals");
const router = require("express").Router();

router.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../public.index.html"));
});

router.post("/goals", async (req, res) => {
  console.log(req.body);
  try {
    const newGoal = await Goals.create({});
    res.json(newGoal);
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;
