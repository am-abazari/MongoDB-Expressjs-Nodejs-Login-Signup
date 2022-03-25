const fs = require('fs');
const path = require('path');

const LoginPath = path.join(__dirname, "..", "view", "Pages", "login.html");
const SignupPath = path.join(__dirname, "..", "view", "Pages", "signup.html");

const loginPage = fs.readFileSync(LoginPath, { encoding: "utf-8" })
const signupPage = fs.readFileSync(SignupPath, { encoding: "utf-8" })

const login = (req, res, next) => {
    res.send(loginPage)
}
const signup = (req, res, next) => {
    res.send(signupPage)
}
module.exports = { login, signup }