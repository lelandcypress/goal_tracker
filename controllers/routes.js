const path = require("path");
const Goals = require("../models/Goals");
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

//add get request for goals list
router.get("/goals", async (req, res) => {
  try {
    const allGoals = await Goals.find({});
    res.json(allGoals);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.get("/goals/:id", async (req, res) => {
  try {
    const currentGoal = await Goals.findOne({ _id: req.params.id });
    res.json(currentGoal);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.delete("/goals/:id", async (req, res) => {
  console.log(req.params.id);
  try {
    await Goals.deleteOne({ _id: req.params.id });
    res.send("Goal Deleted");
  } catch (err) {
    res.status(400).json(err);
  }
});

router.put("/goals/:id", async (req, res) => {
  try {
    const _id = { _id: req.params.id };
    const name = req.body;
    await Goals.findOneAndUpdate(_id, name, { returnOriginal: false });
    res.send("Goal Updated");
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;
