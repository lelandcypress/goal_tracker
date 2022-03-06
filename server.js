// import npm packages here
const express = require("express");
const dotenv = require("dotenv");

//set up express and PORT here
const app = express();
const PORT = process.env.PORT || 3001;

//set up necessary middle ware here
//need body parsing, URL Encoded, and eventually routing once app grows
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.send("Home route successful");
});

//start server here
app.listen(PORT, () => console.log("APP Online! Have a nice day!"));
