//mongoose pacakge require
const mongoose = require("mongoose");

/* we export connectToDB function to app.js file for forming the connection if connection get form it will console log connected db otherwise it print error msg and it will exit the process */

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

//export the function
module.exports = connectToDB;
