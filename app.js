const express = require('express');
const { router } = require('./routes/api');
const { router : routerPages } = require('./routes/pages');
const mongoose = require('mongoose');

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }))
const PORT = 4000;

app.use("/api", router)
app.use("/", routerPages)

mongoose.connect("mongodb://0.0.0.0:27017/MernLogin", (e) => {
    if (!e) app.listen(PORT, () => console.log(`http://localhost:${PORT}`))
    else console.log(e.message);
})