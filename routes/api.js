const { userList } = require('../controllers/userList');
const { userCreation } = require('../controllers/userCreation');
const { tokenVerify } = require('../controllers/tokenVerify');

const router = require('express').Router();
router.post("/user-lists", userList)
router.post("/user-creation", userCreation)
router.get("/verify/:token", tokenVerify)


module.exports = { router }