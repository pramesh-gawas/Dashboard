const router = require("express").Router();
const { GetAllTheData } = require("../controllers/filterController");
const { createUser, CreateLog } = require("../controllers/userController");
router.get("/home", GetAllTheData);
router.get("/", GetAllTheData);
router.post("/register", createUser);
router.post("/login", CreateLog);
module.exports = router;
