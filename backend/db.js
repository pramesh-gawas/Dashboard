const mongoose = require("mongoose");

const mongoUrl = "mongodb://localhost:27017/Blackcoffer";

mongoose.connect(mongoUrl);

const db = mongoose.connection;

db.on("connected", () => {
  console.log("Connected to Mongodb server");
});

db.on("disconnected", () => {
  console.log("Disconnected from Mongodb server");
});

db.on("error", (error) => {
  console.log("Connected to Mongodb server", error);
});

//export the database connection

module.exports = db;
