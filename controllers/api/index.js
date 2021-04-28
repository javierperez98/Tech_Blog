const router = require("express").Router();
const profileRoute = require("./posts");
const userRoute = require("./users");

router.use("/users", userRoute);
router.use("/profile", profileRoute);

module.exports = router;
