// import npm packages here
const express = require("express");
const dotenv = require("dotenv");
const db = require("./config/connection");
const routes = require("./controllers/routes");

//set up express and PORT here
const app = express();
const PORT = process.env.PORT || 3001;

//set up necessary middle ware here
//need body parsing, URL Encoded, and eventually routing once app grows
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use(routes);

//start server here
db.once("open", () => {
  app.listen(PORT, () => console.log("Goal Tracker Online! Get After It"));
});
