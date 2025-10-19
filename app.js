const express = require('express')
const app = express();
const start = require('./router/start')
const { mongoConnect } = require("./utils/db.js");
require('dotenv').config();

app.use('/',start)

const PORT = process.env.PORT;
mongoConnect(() => {
    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
    });
});