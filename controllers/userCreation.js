const { userModel } = require("../models/userListsData")
const sha1 = require('sha1');
const sendMail = require("./Functions/sendEmail");

const userCreation = async (req, res, next) => {
    if (req.method.toLowerCase() == "post") {
        const { name, family, email, password, age, skills } = req.body
        const token = sha1(email) + Date.now();
        try {
            const newUser = await userModel.create({
                name: name,
                family: family,
                email: email,
                password: sha1(password),
                age: age,
                skills: skills,
                token: token,
            })
            const user = await newUser.save();
            res.status(201).json({ status: 201, msg: "Record Created" });
        } catch (error) {
            res.status(402).json({ status: 401, msg: "Error Accourd" });
        }
        if (sendMail(email, token)) console.log("Verification Email Send , Check Your Email/Spam")
        else console.log("An Error Accourd When Sending Verification Email")
    }
}


module.exports = { userCreation }