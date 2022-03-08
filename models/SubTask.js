const { Schema, model } = require("mongoose");

const subTaskSchema = new Schema({
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
});

const SubTasks = model("SubTasks", subTaskSchema);

module.exports = SubTasks;
