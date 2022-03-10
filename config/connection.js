 const mongoose = require("mongoose");

mongoose
  .connect(process.env.MONGODB_URI || "mongodb://localhost/goal_tracker")
  .catch((error) => handleError(error));

module.exports = mongoose.connection;
