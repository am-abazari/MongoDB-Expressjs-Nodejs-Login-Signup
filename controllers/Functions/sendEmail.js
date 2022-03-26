const fs = require('fs');
const path = require('path');
const nodemailer = require("nodemailer");
const VerifyPath = path.join(__dirname, "..", "..", "view", "verify.html");
const verifyPage = fs.readFileSync(VerifyPath, { encoding: "utf-8" })


const sendMail = async (to, token) => {
    const sender = {
        senderEmail: 'YourEmail@gmail.com', // * | Fillout
        senderPassword: 'Your Password' // * | Fillout
    }
    const { senderEmail, senderPassword } = sender;
    const replacedVerifyPage = verifyPage.replace("SET_TOKEN", `http://localhost:4000/api/verify/${token}`)
    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: senderEmail,
            pass: senderPassword,
        }
    });
    let mailOptions = {
        from: senderEmail,
        to: to,
        subject: 'Verification Account',
        html: replacedVerifyPage,
    };

    transporter.sendMail(mailOptions, function (error) {
        if (error) {
            return (false);
        } else {
            return (true)
        }
    });
}



module.exports = sendMail