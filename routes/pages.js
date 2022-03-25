const { signup, login } = require('../controllers/pageController');

const router = require('express').Router();

router.use("/login", login)
router.use("/signup", signup)
router.use("/", (req, res, next) => {
    res.redirect("/signup")
})

module.exports = { router }