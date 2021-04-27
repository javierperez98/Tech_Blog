const router = require("express").Router();
const userRoutes = require("./profile");

router.use("/profile", userRoutes);

module.exports = router;
