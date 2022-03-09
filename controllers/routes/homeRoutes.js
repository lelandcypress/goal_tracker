const path = require("path");
const Goals = require("../../models/Goals");
const router = require("express").Router();

router.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../public.index.html"));
});

router.post("/", async (req, res) => {
  try {
    const newGoal = await Goals.create({});
    res.json(newGoal);
  } catch (err) {
    res.status(400).json(err);
  }
});



module.exports = router;
