const { Schema, model } = require("mongoose");
const { subTaskSchema } = require("./SubTask");

const goalSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  startDate: {
    type: Date,
  },
  goalDate: {
    type: Date,
  },
  //subTask: [subTaskSchema],
});

const Goals = model("Goals", goalSchema);

module.exports = Goals;
