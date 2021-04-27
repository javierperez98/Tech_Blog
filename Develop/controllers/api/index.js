const router = require("express").Router();
const profileRoute = require("./posts");

router.use("/profile", profileRoute);

module.exports = router;
