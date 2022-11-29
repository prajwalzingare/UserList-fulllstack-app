const express = require("express");
const app = express();
const userRouts = require("./routers/userRouts");
app.get("/", userRouts);

module.exports = app;
