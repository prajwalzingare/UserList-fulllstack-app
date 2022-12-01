const app = require("./app");
require("dotenv").config();

const PORT = process.env.port || 4000;
app.listen(PORT, () => {
  console.log(`server started on ${PORT} `);
});
