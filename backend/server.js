const app = require("./app");
const dotenv = require("dotenv").config();

const PORT = process.env.port || 400;
app.listen(PORT, () => {
  console.log(`server started on ${PORT} `);
});
