const router = require("express").Router();
const { GetAllTheData } = require("./controllers");

router.get("/all", GetAllTheData);

module.exports = router;
