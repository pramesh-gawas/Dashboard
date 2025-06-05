const express = require("express");
const db = require("../db");
const app = express();
const cors = require("cors");
require("dotenv").config();
const router = require("../routes/router");
const passport = require("../middleware/auth");

const bodyparser = require("body-parser");
app.use(bodyparser.json());

const PORT = process.env.PORT || 3000;

app.use(
  cors({
    origin: "*",
    methods: ["GET", "POST", "PUT", "DELETE"],
  })
);

app.use("/", router);

app.listen(PORT, () => {
  console.log(`server is running on ${PORT}`);
});
