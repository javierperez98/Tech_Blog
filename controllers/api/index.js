const router = require("express").Router();
const postRoute = require("./posts");
const userRoute = require("./users");

router.use("/users", userRoute);
router.use("/posts", postRoute);

module.exports = router;
