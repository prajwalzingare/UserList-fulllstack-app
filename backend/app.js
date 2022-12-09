// without this error will occur it willl not connect to database because it will not going to get url of database connection
require("dotenv").config();

const express = require("express");
const app = express();
const connectToDB = require("./config/db");
const userRouts = require("./routers/userRouts");

//Middlewere it is necessy to parse data it works
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//it will run the connect db function and form connection.
connectToDB();

/*
we cant write this much in app js as we write in router file so no need to write that instanc of that use only "use"

Express apps have a use() function. This function adds a new middleware to the app.
For example, suppose you want to print the HTTP method (get, post, etc.) and the URL of every request. Here's how you can add a new middleware that
   prints the HTTP method and URL of every request:

   got the point why we are not use get if you write that than we have to specifi each and every route so use only use in express ohk
app.get("/", userRouts);
app.get("/getUser", userRouts);
app.post("/createUser", userRouts);
app.put("/editUser/:id", userRouts);*/
//use only use it accept all middlewewr

app.use("/", userRouts);

module.exports = app;
