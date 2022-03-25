
const { userModel } = require("../models/userListsData")
const sha1  = require('sha1');
const userCreation = async (req, res, next) => {
    if (req.method.toLowerCase() == "post") {
        const { name, family, email, password, age, skills } = req.body
        try {
            const newUser = await userModel.create({
                name: name,
                family: family,
                email: email,
                password: sha1(password),
                age: age,
                skills: skills,
            })
            const user = await newUser.save();
            res.status(201).json({ status: 201, msg: "Record Created" });
        } catch (error) {
            res.status(402).json({ status: 401, msg: "Error Accourd" });
        }
    }
}


module.exports = { userCreation }