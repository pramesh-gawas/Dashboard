const router = require("express").Router();
const passport = require("../middleware/auth");
const authMiddleWare = passport.authenticate("local", { session: false });
const { GetAllTheData } = require("../controllers/filtercontrollers");
const { createUser, CreateLog } = require("../controllers/usercontroller");
router.get("/home", authMiddleWare, GetAllTheData);
router.post("/register", createUser);
router.post("/login", authMiddleWare, CreateLog);
module.exports = router;
