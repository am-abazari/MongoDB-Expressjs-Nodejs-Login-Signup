const { signup, login } = require('../controllers/pageController');

const router = require('express').Router();

router.use("/login", login)
router.use("/signup", signup)

module.exports = { router }