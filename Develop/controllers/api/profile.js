const router = require("express").Router();

router.get("/", (req, res) => {
	try {
		res.render("dashboard");
	} catch (err) {
		res.status(500).json(err);
	}
});

router.get("/create", (req, res) => {
	try {
		res.render("createpost");
	} catch (err) {
		res.status(500).json(err);
	}
});

router.get("/edit", (req, res) => {
	try {
		res.render("editpost");
	} catch (err) {
		res.status(500).json(err);
	}
});

module.exports = router;
