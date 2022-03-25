const { userList } = require('../controllers/userList');
const { userCreation } = require('../controllers/userCreation');

const router = require('express').Router();
router.post("/user-lists", userList)
router.post("/user-creation", userCreation)


module.exports = { router }