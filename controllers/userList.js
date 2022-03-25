const { userModel } = require("../models/userListsData")

const userList = async (req, res, next) => {
    const { email, password } = req.body
    const userData = await userModel.findOne({ email: email, passowrd: password }, { _id: true }) // ? | Any Item you Want
    if (userData) {
        res.status(200).json(userData)
    } else {
        res.status(404).json({ staus: 404, msg: "User not Found" })
    }
}


module.exports = { userList }