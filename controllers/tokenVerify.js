const { userModel } = require("../models/userListsData");

const tokenVerify = async (req, res, next) => {
    if (req.method.toLowerCase() == "get") {
        const { token } = req.params
        console.log(token);
        try {
            const newUser = await userModel.updateOne({ "token": token }, { "active": true })
            newUser.modifiedCount != 0 ? res.status(201).json({ status: 201, msg: "Actived" }) : res.status(401).json({ status: 401, msg: "Not Found" })
        } catch (error) {
            res.status(402).json({ status: 401, msg: "Error Accourd" });
        }
    }
}

module.exports = { tokenVerify }