const router = require("express").Router();
const { GetAllTheData } = require("./controllers");

router.get("/", GetAllTheData);

module.exports = router;
