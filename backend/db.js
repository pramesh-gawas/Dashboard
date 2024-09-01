const mongoose = require("mongoose");

const mongoUrl =
  "mongodb+srv://pramesh:12345@cluster0.vgdsn12.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

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
