const { Schema, model } = require("mongoose");
const { subTaskSchema } = require("./SubTask");

const goalSchema = new Schema({
  name: {
    required: true,
    type: String,
    trim: true,
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
