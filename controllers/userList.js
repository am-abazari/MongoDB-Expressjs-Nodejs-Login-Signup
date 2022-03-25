const { userModel } = require("../models/userListsData")
const sha1 = require('sha1');
const userList = async (req, res, next) => {
    const { email, password } = req.body
    const hashedPassword = sha1(password)
    const userData = await userModel.where("email").equals(email).where("password").equals(hashedPassword).limit(1) // ? | Any Item you Want
    if (userData.length) {
        res.status(200).json(userData)
    } else {
        res.status(404).json({ staus: 404, msg: "User not Found" })
    }
}


module.exports = { userList }