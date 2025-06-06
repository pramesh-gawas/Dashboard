const router = require("express").Router();
const passport = require("./Authentication/auth");
const authMiddleWare = passport.authenticate("local", { session: false });
const { GetAllTheData } = require("./Controllers/filterController");
const { createUser, CreateLog } = require("./Controllers/userController");
router.get("home", authMiddleWare, GetAllTheData);
router.post("register", createUser);
router.post("login", authMiddleWare, CreateLog);
module.exports = router;
