// without this error will occur it willl not connect to database because it will not going to get url of database connection
require("dotenv").config();

const express = require("express");
const app = express();
const connectToDB = require("./config/db");
const userRouts = require("./routers/userRouts");

//Middlewere it is necessy to parse data it works
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

connectToDB();
app.use("/", userRouts);

module.exports = app;
