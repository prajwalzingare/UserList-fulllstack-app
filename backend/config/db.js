const mongoose = require("mongoose");
//for understanding and trail
// const mongoose = require("../models/userModel");
const connectToDB = () => {
  mongoose
    .connect(process.env.MONGO_URL)
    .then((conn) => {
      console.log(`connected db:${conn.connection.host}`);
    })
    .catch((err) => {
      console.log(err.message);
      console.log("object");
      process.exit(1);
    });
};

module.exports = connectToDB;
