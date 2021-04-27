const router = require("express").Router();
const { Posts, User } = require("../models");

router.get("/", async (req, res) => {
	try {
		const postData = await Posts.findAll({
			include: [
				{
					model: User,
					attributes: ["name"],
				},
			],
		});
		const posts = postData.map((post) => post.get({ plain: true }));
		res.render("homepage", {
			posts,
		});
	} catch (err) {
		res.status(500).json(err);
	}
});

router.get("/login", (req, res) => {
	try {
		res.render("login");
	} catch (err) {
		res.status(500).json(err);
	}
});

router.get("/signup", (req, res) => {
	try {
		res.render("signup");
	} catch (err) {
		res.status(500).json(err);
	}
});

module.exports = router;
