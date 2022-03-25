const mongoose = require('mongoose');

const userListData = new mongoose.Schema({
    name: { type: String, required: true, trim: true, },
    family: { type: String, required: true, trim: true, },
    email: { type: String, required: true, trim: true, lowercase: true },
    password: { type: String, required: true, },
    age: { type: Number, required: false, min: 18, max: 100 },
    skills: { type: [String], required: false },
}, { timestamps: true })

const userModel = mongoose.model("user", userListData)
module.exports = { userModel }