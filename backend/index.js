const express = require("express");
const db = require("./db");
const app = express();
const cors = require("cors");
require("dotenv");
const router = require("./router");

const PORT = process.env.PORT || 3000;

app.use(cors());

app.use("/", router);

app.listen(PORT, () => {
  console.log(`server is running on ${PORT}`);
});
