const router = require("express").Router();
const passport = require("../middleware/auth");
const authMiddleWare = passport.authenticate("local", { session: false });
const { GetAllTheData } = require("../controllers/FilterControllers");
const { createUser, CreateLog } = require("../controllers/UserController");
router.get("/home", authMiddleWare, GetAllTheData);
router.post("/register", createUser);
router.post("/login", authMiddleWare, CreateLog);
module.exports = router;
