const path = require("path");
const Goals = require("../../models/Goals");
const router = require("express").Router();

router.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../public.index.html"));
});

router.post("/goals", async (req, res) => {
  console.log(req.body);
  try {
    const newGoal = await Goals.create(req.body);
    res.json(newGoal);
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;

//add get request for goals list
router.get("/goals", async (req, res) => {
  try {
    const allGoals = await Goals.find({});
    res.json(allGoals);
  } catch (err) {
    res.status(400).json(err);
  }
});
