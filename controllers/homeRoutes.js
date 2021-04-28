const router = require("express").Router();
const { Posts, User } = require("../models");
const withAuth = require("../utils/auth");

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
			logged_in: req.session.logged_in,
		});
	} catch (err) {
		res.status(500).json(err);
	}
});

router.get("/login", (req, res) => {
	try {
		if (req.session.logged_in) {
			res.redirect("/profile");
			return;
		}
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

router.get("/create", (req, res) => {
	try {
		res.render("createpost", {
			logged_in: req.session.logged_in,
		});
	} catch (err) {
		res.status(500).json(err);
	}
});

router.get("/profile", withAuth, async (req, res) => {
	try {
		// Find the logged in user based on the session ID
		const userData = await User.findByPk(req.session.user_id, {
			attributes: { exclude: ["password"] },
			include: [{ model: Posts }],
		});
		const user = userData.get({ plain: true });
		res.render("dashboard", {
			...user,
			logged_in: true,
		});
	} catch (err) {
		res.status(500).json(err);
	}
});

router.get("/posts/:id", withAuth, async (req, res) => {
	try {
		const postData = await Posts.findOne({
			where: {
				id: req.params.id,
				user_id: req.session.user_id,
			},
		});

		if (!postData) {
			res.status(404).json({ message: "No project found with this id!" });
			return;
		}
		const post = postData.get({ plain: true });
		res.render("editpost", {
			post,
			logged_in: req.session.logged_in,
		});
	} catch (err) {
		res.status(500).json(err);
	}
});

module.exports = router;
