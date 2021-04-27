const router = require("express").Router();
const profileRoute = require("./posts");
const userRoute = require("./users");

router.use("/profile", profileRoute);
router.use("/user", userRoute);

module.exports = router;
